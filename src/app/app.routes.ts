import { Routes } from '@angular/router';
import { PlaceholderSiteComponent } from './pages/placeholder-site/placeholder-site.component';

// Import main pages
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

// Import pages for the footer
import { ImprintComponent } from './pages/imprint/imprint.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';


export const routes: Routes = [
  { path: '', component: LandingComponent }, // Login Page
  { path: 'landing', component: LandingComponent }, // Landing Page
  { path: 'dashboard', component: DashboardComponent }, // Dashboard (Logged In)
  { path: 'login', component: LoginComponent }, // Login
  { path: 'create-account', component: CreateAccountComponent }, // Create Account
  { path: 'imprint', component: ImprintComponent }, // Imprint
  { path: 'terms-of-service', component: TermsOfServiceComponent }, // ToS
  { path: 'privacy-policy', component: PrivacyPolicyComponent }, // Privacy Policy
  { path: 'contact', component: ContactComponent }, // Contact
  { path: 'placeholder-site', component: PlaceholderSiteComponent }, // Example Placeholder Site
  { path: 'register', component: RegisterComponent }, // Register Site
  { path: 'password-reset', component: PasswordResetComponent}, // Reset password Site
];
