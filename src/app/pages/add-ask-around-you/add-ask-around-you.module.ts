import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAskAroundYouPageRoutingModule } from './add-ask-around-you-routing.module';

import { AddAskAroundYouPage } from './add-ask-around-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAskAroundYouPageRoutingModule
  ],
  declarations: [AddAskAroundYouPage]
})
export class AddAskAroundYouPageModule {}
