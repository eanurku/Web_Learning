import { Component } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-variables',
  styleUrl: './variables.css',
  templateUrl: './variables.html',
})
export class Variables {


  nameValue:string = "Anurag Kumar";

  constructor() { 

    console.log(this.nameValue);
  }


}
