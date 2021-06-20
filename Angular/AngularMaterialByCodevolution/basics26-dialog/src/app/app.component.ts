import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics26-dialog';

  constructor(private dialogService:MatDialog){

  }
  openDialog(){

    let dialogRef=this.dialogService.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe(result=>{
      console.log(`after close :${result}`)
    });

  }
  openDialogAndPassData(){

    let dialogRef=this.dialogService.open(DialogExampleComponent,{data:{name:'Gonu'}});

    dialogRef.afterClosed().subscribe(result=>{
      console.log(`after close :${result}`)
    });

  }
}
