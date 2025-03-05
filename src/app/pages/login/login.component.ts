import { Component } from '@angular/core';
import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, SplitterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
