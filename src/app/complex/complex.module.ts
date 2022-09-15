import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplexPageRoutingModule } from './complex-routing.module';

import { ComplexPage } from './complex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplexPageRoutingModule
  ],
  declarations: [ComplexPage]
})
export class ComplexPageModule {}
