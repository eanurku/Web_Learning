import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'basics32-virtual-scrolling';

  numbers=[];

  ngOnInit(): void {
    for(let i=0;i<1000;i++){
      this.numbers.push(i);
    }
  }
}
