import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquationAPage } from './equation-a.page';

const routes: Routes = [
  {
    path: '',
    component: EquationAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquationAPageRoutingModule {}
