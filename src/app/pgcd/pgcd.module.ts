import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgcdPageRoutingModule } from './pgcd-routing.module';

import { PgcdPage } from './pgcd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgcdPageRoutingModule
  ],
  declarations: [PgcdPage]
})
export class PgcdPageModule {}
