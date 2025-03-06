import { Component, OnInit } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LandingComponent } from '../../pages/landing/landing.component';

@Component({
  selector: 'app-login-form',
  imports: [
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    DividerModule,
    RouterLink,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  loginEmail: string = '';
  loginPassword: string = '';
  currentUser: string | null = null;
  loginMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  onSubmit() {
    if (this.authService.login(this.loginEmail, this.loginPassword)) {
      this.router.navigate(['dashboard']);
    } else {
    }
  }

  onLogout() {
    this.authService.logout();
    this.loginMessage = 'Logged out.';
  }
}
