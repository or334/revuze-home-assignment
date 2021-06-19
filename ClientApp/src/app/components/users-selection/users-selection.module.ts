import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersSelectionComponent } from './users-selection.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    UsersSelectionComponent
  ],
  exports: [UsersSelectionComponent],
  imports: [
    CommonModule,

    MatDividerModule,
    MatListModule
  ]
})
export class UsersSelectionModule { }
