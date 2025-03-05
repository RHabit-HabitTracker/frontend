import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { style } from '@angular/animations';
//import { AuthService } from './auth.service';  // Import the AuthService, needs login logic



@Component({
  selector: 'app-header',
  imports: [CommonModule,
            Menubar,
            InputSwitchModule,
            FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

    isDarkMode: boolean = false;

    items = [
        { label: '', icon: 'pi pi-ellipsis-v', items: [
            { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact'},
            { label: 'About Us', icon: 'pi pi-info-circle', routerLink: '/landing'},
            { label: 'Impressum', icon: 'pi pi-book', routerLink: '/imprint'},
            { label: 'Terms of Service', icon: 'pi pi-paperclip', routerLink: '/terms-of-service'},
            { label: 'Privacy policy', icon: 'pi pi-cloud', routerLink: '/privacy-policy'},
        ] },
        { label: 'Login', icon: 'pi pi-user', routerLink: '/login', visible: true },
    ];

    ngOnInit() {
    }

    toggleTheme() {
    }

    applyTheme() {
    }
}