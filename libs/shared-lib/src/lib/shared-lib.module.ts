import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from '@angular/router';
import { SharedLibRoutes } from './shared-lib.routes';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent],
})
export class SharedLibModule {
  static forRoot(): ModuleWithProviders<SharedLibModule> {
    return {
      ngModule: SharedLibModule,
      providers: [
        {
          provide: ROUTES,
          multi: true,
          useValue: SharedLibRoutes,
        },
      ],
    };
  }
}
