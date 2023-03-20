import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstronomyPageRoutingModule } from './astronomy-routing.module';

import { AstronomyPage } from './astronomy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstronomyPageRoutingModule
  ],
  declarations: [AstronomyPage]
})
export class AstronomyPageModule {}
