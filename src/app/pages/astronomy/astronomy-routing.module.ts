import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstronomyPage } from './astronomy.page';

const routes: Routes = [
  {
    path: '',
    component: AstronomyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstronomyPageRoutingModule {}
