import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedLibRoutes } from './shared-lib.routes';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [CommonModule,
  RouterModule.forChild(SharedLibRoutes)],
  declarations: [AboutComponent],
})
export class SharedLibModule {
}
