import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basics-07-reactive-form');

  userForm:FormGroup = new FormGroup({
    userId: new FormControl('0'),
    userName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    fullName: new FormControl(''),
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),

  });

  formbuilder:FormBuilder=inject(FormBuilder);

  userForm2!:FormGroup;

  constructor() {

    this.userForm2=this.formbuilder.group({
      userId:['0'],
      userName:['',[Validators.required,Validators.minLength(5)]],
      fullName:[''],
      userEmail:[''],
      userPassword:['']

    });

  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
