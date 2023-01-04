import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'application-b',
    loadChildren: () =>
      import('application-b/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'library',
    loadChildren: () => import('@back-base-assignment/shared-lib').then(m => m.SharedLibModule)
  }
];
