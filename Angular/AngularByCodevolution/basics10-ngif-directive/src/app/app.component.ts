import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <h2 *ngIf="true"> Code with me 1</h2>
  <h2 *ngIf="false"> Hidden</h2>


  <h2 *ngIf="display;else Elseblock">
    code with me 2
  </h2>

  <ng-template #Elseblock>
    <h2>Else block 1</h2>
  </ng-template>


  <div *ngIf="display; then ThenBlock;else Elseblock">
  </div>

  <ng-template #ThenBlock >
    <h2>then block</h2>
  </ng-template>

  <ng-template #Elseblock>
    <h2>Else block 2</h2>
  </ng-template>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics10-ngif-directive';

  display='false';
  
}
