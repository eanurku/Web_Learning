import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  isChecked:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }
  onChange($event){
    console.log($event);
  }

}
