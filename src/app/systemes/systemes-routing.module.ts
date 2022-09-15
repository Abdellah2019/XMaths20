import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemesPage } from './systemes.page';

const routes: Routes = [
  {
    path: '',
    component: SystemesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemesPageRoutingModule {}
