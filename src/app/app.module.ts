import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FabricButtonModule,
  FabricRadioModule,
  FabricRadioGroupModule,
} from '@fabric-msft/fabric-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FabricButtonModule,
    FabricRadioModule,
    FabricRadioGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
