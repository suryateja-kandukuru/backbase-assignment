import { Component } from '@angular/core';

@Component({
  selector: 'back-base-assignment-application-b-entry',
  template: `
  <p>Welcome to Application B page.</p>
<ul>
  <li>Below button is a shared component taken from shared lib shared-component library.
  </li>
  <li>
    Click the below button to navigate to shared library.
  </li>
</ul>
<back-base-assignment-b-button bName="Go to Shared Library" routerLink="/library">
</back-base-assignment-b-button>

`,
})
export class RemoteEntryComponent {

  onButtonClick() {
    alert('Im from app b')
  }
}
