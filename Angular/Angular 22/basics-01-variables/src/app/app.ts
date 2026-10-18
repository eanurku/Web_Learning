import { Component, signal } from '@angular/core';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [DataBinding,Variables,FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basics-01-variables');

  nameValue:string = "Anu";
  maxLengthvalue:number = 5;
}
