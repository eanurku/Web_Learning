import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics25-snackbar';

  constructor(private snackbarService:MatSnackBar){}

  openSnackbar(message:string){
    this.snackbarService.open(message);
  }
  openSnackbar2(message:string,action:string){
    this.snackbarService.open(message,action);
  }
  openSnackbar3(message:string,action:string,config:any){
    this.snackbarService.open(message,action,config);
  }


  openSnackbarWithAction(message:string,action:string){
    let snackbarRef =this.snackbarService.open(message,action);

    snackbarRef.afterDismissed().subscribe(()=>{

      console.log("this is dismiss message");
    });

    snackbarRef.onAction().subscribe(()=>{
      console.log("this is on action message");
    });
  }

  openSnackbarWithActionAndConfig(message:string,action:string,config:any){
    let snackbarRef =this.snackbarService.open(message,action,config);

    snackbarRef.afterDismissed().subscribe(()=>{

      console.log("this is dismiss message");
    });

    snackbarRef.onAction().subscribe(()=>{
      console.log("this is on action message");
    });
  }


  openCustomSnackbar(){

    this.snackbarService.openFromComponent(CustomSnackbarComponent,{duration:2000});
  }


}
