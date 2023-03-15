import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindDirectionPipe } from './wind-direction.pipe';



@NgModule({
  declarations: [
    WindDirectionPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WindDirectionPipe
  ]
})
export class PipesModule { }
