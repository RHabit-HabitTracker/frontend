import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlaceholderSiteComponent } from './placeholder-site/placeholder-site.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: 'placeholder-site', component: PlaceholderSiteComponent}
];