import { Component } from '@angular/core';
import { ScrollingTextComponent } from '../../components/scrolling-text/scrolling-text.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-landing',
  imports: [ScrollingTextComponent, ButtonModule, MenubarModule, InputTextModule, CardModule, BadgeModule, SplitButtonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
