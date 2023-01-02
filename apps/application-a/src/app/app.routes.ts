import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'application-b',
    loadChildren: () =>
      import('application-b/Module').then((m) => m.RemoteEntryModule),
  },
];
