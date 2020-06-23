import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;

  address:Address;
  hobbies:string[];
  
  posts:Post[];

  isEdit:boolean=false;

  constructor( private userService:UserService) { 
    console.log("construct....")
  }

  ngOnInit(): void {

    console.log("ngOnInit...");
    this.name="gonu";
    this.age=12;
    this.email="test@TestBed.com";
    this.address={
      street:"11",
      city:"sam",
      state:"boston" 
    }
    this.hobbies=["tennis","football","soccer"]


    this.userService.getUsers().subscribe(posts=>{
      this.posts=posts;
      
    });

  }


  onClick(){
    this.name="abc";
    this.hobbies.push("new hobby");
    console.log("on click...");
  }
  onSubmit(hobby:string){
    console.log("on submit..."+hobby);
    this.hobbies.push(hobby);
    return false;
  }
  deleteHobby(hobby:string){
    this.hobbies=this.hobbies.filter(h=>h!==hobby);
    console.log(hobby);
  }
  
  toggleEdit(){
    this.isEdit=!this.isEdit;
  }

};

interface Address{
  street:string;
  city:string;
  state:string
}
interface Post{
  id:number;
  title:string;
  body:string;
  userId:number;

}


