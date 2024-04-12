import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
const materialComponents=[ 
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatButtonToggleModule,
];

@NgModule({

  imports:[materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
