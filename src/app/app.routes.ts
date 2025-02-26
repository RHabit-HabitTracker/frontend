import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PlaceholderSiteComponent } from './pages/placeholder-site/placeholder-site.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'placeholder-site', component: PlaceholderSiteComponent},
  { path: 'login', component: LoginComponent},
];
