import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    CardComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    CardComponent,
    SearchbarComponent
  ]
})
export class ComponentsModule { }
