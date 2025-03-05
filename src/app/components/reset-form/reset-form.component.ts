import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-form',
  imports: [FloatLabelModule, InputTextModule, FormsModule, ButtonModule, CardModule, DividerModule, RouterLink],
  templateUrl: './reset-form.component.html',
  styleUrl: './reset-form.component.css'
})
export class ResetFormComponent {
  accountEmail: string | undefined;
  resetPassword: string | undefined;
  resetPasswordRepeat: string | undefined;

  onSubmit() {
    
    console.log('Form Submitted:');
    console.log('Email:',this.accountEmail);
    console.log('Password:',this.resetPassword);
      
  }
}
