import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
import { ButtonDemo } from './components/button-demo/button-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDemo],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rhabit';
}
