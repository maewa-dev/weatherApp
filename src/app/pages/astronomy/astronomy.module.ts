import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstronomyPageRoutingModule } from './astronomy-routing.module';

import { AstronomyPage } from './astronomy.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstronomyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AstronomyPage]
})
export class AstronomyPageModule {}
