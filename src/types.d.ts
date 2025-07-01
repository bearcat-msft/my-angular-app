interface ToggleEvent extends Event {
  new (type: string, eventInitDict?: ToggleEventInit): ToggleEvent;
}
interface ToggleEventInit extends EventInit {
  newState?: string | undefined;
  oldState?: string | undefined;
}
