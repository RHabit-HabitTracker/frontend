import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    RouterLink,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      { label: 'Startseite', icon: 'pi pi-envelope', routerLink: '/landing' },
      { label: 'Kontakt', icon: 'pi pi-envelope', routerLink: '/contact' },
      { label: 'Über uns', icon: 'pi pi-info-circle', routerLink: '/about' },
    ];
  }
}
