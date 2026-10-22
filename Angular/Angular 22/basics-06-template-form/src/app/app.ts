import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule,JsonPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basics-06-template-form');

  email: string = '';

  onSubmit(userFormRef: any){

    if(userFormRef.invalid){
      console.log("Form is invalid. Please fill out all required fields.");
      return;
    }
    const isConfirmed = confirm("Are you sure you want to submit the form?");
    if (isConfirmed) {
      console.log("Form submitted with data:", userFormRef.value);
    }
  }

  onEmailChange(email: string) {
    console.log("Email changed to:", email);
  }
}
