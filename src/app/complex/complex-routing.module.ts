import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplexPage } from './complex.page';

const routes: Routes = [
  {
    path: '',
    component: ComplexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplexPageRoutingModule {}
