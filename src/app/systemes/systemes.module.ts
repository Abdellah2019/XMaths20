import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemesPageRoutingModule } from './systemes-routing.module';

import { SystemesPage } from './systemes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemesPageRoutingModule
  ],
  declarations: [SystemesPage]
})
export class SystemesPageModule {}
