import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PipesModule } from '../pipes/pipes.module';
import { AstronomyCardComponent } from './astronomy-card/astronomy-card.component';
import { LocationCardComponent } from './location-card/location-card.component';



@NgModule({
  declarations: [
    CardComponent,
    LocationCardComponent,
    SearchbarComponent,
    AstronomyCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    CardComponent,
    LocationCardComponent,
    SearchbarComponent,
    AstronomyCardComponent
  ]
})
export class ComponentsModule { }
