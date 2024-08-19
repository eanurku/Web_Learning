import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'ZAngular_Exp2';

  ngOnInit(): void {


  //ex 1
  //   let obs=new Observable(observer=>{

  //     console.log("observable starts...");
  //     observer.next(1);
  //     observer.next(2);
  //     observer.next(3);
  //     //observer.error('error happened');
  //     observer.complete();
  //     observer.next(4);
  //     observer.next(5);
  //   });



  //   obs.subscribe({
  //     next: val=>{
  //       console.log(val)
  //     },

  //     error:error=>{
  //       console.log("error ...");
  //     },
  //     complete: ()=>{
  //       console.log("completed");
  //     }
  //   });


  //   obs.subscribe(
      
  //   val=>{console.log("second :"+val);},
  //   error=>{console.log("error ...")},
  //   ()=>{console.log("completed...");}
  
  // )

 //ex 2

  // let obs1=new Observable(obsr=>{
  //   obsr.next(Math.random())
  // });


  // obs1.subscribe(val=>console.log("obs1 "+val));
  // obs1.subscribe(val=>console.log("obs1 :"+val));





  // let subject=new Subject();

  // subject.subscribe(val=>{console.log("sub :"+val)});
  // subject.subscribe(val=>{console.log("sub :"+val)});



  // subject.next(Math.random());
  // obs1.subscribe(subject);



  let behSub=new AsyncSubject();



 
  behSub.subscribe(val=>{console.log("sub 1 :"+val)});

  behSub.next(1);
  behSub.next(2);

  behSub.subscribe(val=>{console.log("sub 2 :"+val)});

  behSub.next(3);

  behSub.subscribe(val=>{console.log("sub 3 :"+val)});

  behSub.complete();

  behSub.next(4);
  
  behSub.next(42);

  behSub.subscribe(val=>{console.log("sub 4:"+val)});











  


    
  }



}
