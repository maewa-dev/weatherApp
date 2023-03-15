import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [
    CardComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CardComponent,
    SearchbarComponent
  ]
})
export class ComponentsModule { }
