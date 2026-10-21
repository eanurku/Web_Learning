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

  onSubmit(userData: any){
    console.log("Form submitted with data:", userData);
  }
}
