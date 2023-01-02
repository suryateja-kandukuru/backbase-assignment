import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BButtonComponent } from './b-button/b-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BButtonComponent],
  exports: [BButtonComponent]
})
export class SharedComponentsModule {}
