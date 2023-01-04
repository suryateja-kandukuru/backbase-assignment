import { Component } from '@angular/core';

@Component({
  selector: 'back-base-assignment-application-b-entry',
  template: `<back-base-assignment-nx-welcome>
  </back-base-assignment-nx-welcome>
  <back-base-assignment-b-button [bName]="'Common Button'" (buttonClick)="onButtonClick()"></back-base-assignment-b-button>
`,
})
export class RemoteEntryComponent {

  onButtonClick() {
    alert('Im from app b')
  }
}
