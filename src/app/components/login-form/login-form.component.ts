import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login-form',
  imports: [FloatLabelModule, InputTextModule, FormsModule, ButtonModule, CardModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

    loginEmail: string | undefined;

    loginPassword: string | undefined;


  onSubmit() {
    
    console.log('Form Submitted:');
    console.log('Email:',this.loginEmail);
    console.log('Password:',this.loginPassword);
      
  }
}
