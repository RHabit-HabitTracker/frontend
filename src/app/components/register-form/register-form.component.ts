import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-register-form',
  imports: [FloatLabelModule, InputTextModule, FormsModule, ButtonModule, CardModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerEmail: string | undefined;
  registerPassword: string | undefined;
  registerPasswordRepeat: string | undefined;

  onSubmit() {
    
    console.log('Form Submitted:');
    console.log('Email:',this.registerEmail);
    console.log('Password:',this.registerPassword);
      
  }
}
