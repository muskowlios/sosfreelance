import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDistancePageRoutingModule } from './select-distance-routing.module';

import { SelectDistancePage } from './select-distance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDistancePageRoutingModule
  ],
  declarations: [SelectDistancePage]
})
export class SelectDistancePageModule {}
