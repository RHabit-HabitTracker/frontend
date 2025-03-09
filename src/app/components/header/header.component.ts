import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { style } from '@angular/animations';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
//import { AuthService } from './auth.service';  // Import the AuthService, needs login logic

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    Menubar,
    InputSwitchModule,
    FormsModule,
    ToggleSwitchModule,
    ToolbarModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = false;

  items = [
    {
      label: '',
      icon: 'pi pi-ellipsis-v',
      items: [
        { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' },
        { label: 'Impressum', icon: 'pi pi-book', routerLink: '/imprint' },
        {
          label: 'Terms of Service',
          icon: 'pi pi-paperclip',
          routerLink: '/terms-of-service',
        },
        {
          label: 'Privacy policy',
          icon: 'pi pi-cloud',
          routerLink: '/privacy-policy',
        },
      ] /*style: { 'min-width': '120px', 'text-align': 'center' } */,
    },
    {
      label: 'Login',
      icon: 'pi pi-sign-in',
      routerLink: '/login',
      visible: true,
    },
    {
      label: 'Registrieren',
      icon: 'pi pi-user-plus',
      routerLink: '/register',
      visible: true,
    },
  ];

  ngOnInit() {}

  toggleTheme() {}

  applyTheme() {}
}
