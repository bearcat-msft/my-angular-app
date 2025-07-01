import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FieldLabelPosition, RadioGroup } from '@fabric-msft/fabric-web';
import { fabricLightTheme, setTheme } from '@fabric-msft/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private ngZone: NgZone) {
    console.log(
      'patched mutations',
      (window as any).__Zone_disable_MutationObserver
    );
    console.log(
      'patched event target',
      (window as any).__Zone_disable_EventTarget
    );
  }

  title = 'my-angular-wrapper-demo';

  form = new FormGroup({
    fruit: new FormControl('', [Validators.required]),
  });

  labelPosition: FieldLabelPosition;
  formStatus: string;

  @ViewChild('radioGroup') radioGroup: ElementRef<RadioGroup>;

  onInputSubmit(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.form.setValue({ fruit: value.toLowerCase() });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted successfully with value:', this.form.value);
    } else {
      console.log('Form is invalid:', this.form.get('fruit')?.errors);
      this.form.markAllAsTouched();
    }
  }

  ngOnInit() {
    setTheme(fabricLightTheme);
    this.form.controls['fruit'].valueChanges.subscribe((value: any) => {
      console.log('Radio group value changed:', value);
    });
    this.form.statusChanges.subscribe((status: any) => {
      console.log('Form validation status:', status);
      this.formStatus = status;
    });

    const observer = new MutationObserver(() => {
      console.log('Mutation observed!');
      console.log(
        NgZone.isInAngularZone() ? 'In Angular zone' : 'Outside Angular zone'
      );
    });
    observer.observe(document.body, { childList: true });
    document.body.appendChild(document.createElement('div'));
  }
}
