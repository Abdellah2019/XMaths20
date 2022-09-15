import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgcdPage } from './pgcd.page';

const routes: Routes = [
  {
    path: '',
    component: PgcdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgcdPageRoutingModule {}
