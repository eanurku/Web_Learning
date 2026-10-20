import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  imports: [RouterOutlet,NgClass,NgStyle],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basics-05-directives');

  classForShow:string='';

  showBox:string='';
  styleBox:any;

  onSuccess() {
    console.log("success clicked ");
    this.classForShow="btn-success";
  }
  onWarning() {
    console.log("warning clicked ");
    this.classForShow="btn-warning";
  } 
  onDanger() {
    console.log("danger clicked ");
    this.classForShow="btn-danger";
  }

  onShowCircle() {
    console.log("show circle clicked ");
    this.showBox="circle";

    this.styleBox={
      'width': '100px',
      'height': '100px',
      'border-radius': '50%',
      'background-color': 'blue',
    };

  }

  onShowSquare() {
    console.log("show square clicked ");
    this.showBox="square";
    this.styleBox={
      'width': '100px',
      'height': '100px',
      'background-color': 'red',
    };

  }

}
