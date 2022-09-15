import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquationAPageRoutingModule } from './equation-a-routing.module';

import { EquationAPage } from './equation-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquationAPageRoutingModule
  ],
  declarations: [EquationAPage]
})
export class EquationAPageModule {}
