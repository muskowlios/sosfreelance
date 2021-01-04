import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMediaPageRoutingModule } from './view-media-routing.module';

import { ViewMediaPage } from './view-media.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMediaPageRoutingModule
  ],
  declarations: [ViewMediaPage]
})
export class ViewMediaPageModule {}
