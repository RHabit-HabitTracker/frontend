import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-placeholder-site',
  imports: [FooterComponent, 
            HeaderComponent],
  templateUrl: './placeholder-site.component.html',
  styleUrl: './placeholder-site.component.css'
})
export class PlaceholderSiteComponent {

}
