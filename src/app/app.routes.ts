import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PlaceholderSiteComponent } from './pages/placeholder-site/placeholder-site.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'placeholder-site', component: PlaceholderSiteComponent},
  { path: 'login', component: LoginComponent},
];
