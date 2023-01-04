import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'back-base-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'application-a';
  display = true
  navRoutes: any[] = [
    {
      routeName: 'Home',
      routerLink: 'home',
      icon: 'pi-home'
    },
    {
      routeName: 'Application - B',
      routerLink: 'application-b',
      icon: 'pi-box'
    },
    {
      routeName: 'Library',
      routerLink: 'library',
      icon: 'pi-book'
    }
  ]

}
