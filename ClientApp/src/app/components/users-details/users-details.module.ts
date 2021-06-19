import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailsComponent } from './users-details.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    UsersDetailsComponent
  ],
  exports: [UsersDetailsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
  ]
})
export class UsersDetailsModule { }
