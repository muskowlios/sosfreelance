import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskAroundYouDetailPageRoutingModule } from './ask-around-you-detail-routing.module';

import { AskAroundYouDetailPage } from './ask-around-you-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskAroundYouDetailPageRoutingModule
  ],
  declarations: [AskAroundYouDetailPage]
})
export class AskAroundYouDetailPageModule {}
