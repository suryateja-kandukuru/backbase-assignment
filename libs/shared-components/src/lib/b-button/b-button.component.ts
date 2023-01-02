import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'back-base-assignment-b-button',
  templateUrl: './b-button.component.html',
  styleUrls: ['./b-button.component.scss'],
})
export class BButtonComponent {
  @Input() bName!: string

  @Output() buttonClick = new EventEmitter()

  onButtonClick() {
    this.buttonClick.emit()
  }
}
