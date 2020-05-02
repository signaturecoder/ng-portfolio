import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
const materials = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materials
  ],
  exports: [
    materials
   ]
})
export class MaterialModule { }
