import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>test works</h2>

  <input id="{{myid}}" type='text' value='anurag'/>
  <input [id]="myid" type='text' value='anurag'/>

  <input disabled type='text' value='anurag should be disabled'/>
  <!-- interplolation will work with string type only not for boolean type start-->
  <input disabled="{{isDisabled}}" type='text' value='anurag should not be disabled'/>
  <!-- interplolation will work with string type only not for boolean type end-->

   <!-- property binding-->
  <input [disabled]='isDisabled' type='text' value='anurag not disabled'/>
  <input bind-disabled='isDisabled' type='text' value='anurag not disabled'/>
  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  myid='testid';
  isDisabled=false;

  constructor() { }

  ngOnInit(): void {
  }

}
