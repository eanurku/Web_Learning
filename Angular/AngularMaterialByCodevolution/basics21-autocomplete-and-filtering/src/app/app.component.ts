import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { startWith,map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'basics21-autocomplete-and-filtering';
  options:string[]=['Angular','React','Vue','Angular material']
  optionsObject=[
    {name:'Angular 1'},
    {name:'Angular 2'},
    {name:'Angular 3'},
    {name:'Angular 4'},
    {name:'Angular 5'},
  ];
  myInputFormControl=new FormControl();
  filteredOptions:Observable<string[]>;

  ngOnInit() {
  
   this.filteredOptions=this.myInputFormControl.valueChanges.pipe(startWith(''),map(value=> this._filter(value)));

  }

  _filter(filterValue:string){

    return this.options.filter(option=>option.toLowerCase().includes(filterValue.toLowerCase()));
  }

  displayFunction(obj){

    return obj.name;
  }
}
