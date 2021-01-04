import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskAroundYouPageRoutingModule } from './ask-around-you-routing.module';

import { AskAroundYouPage } from './ask-around-you.page';
import { ComponentsModule } from 'src/app/component/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AskAroundYouPageRoutingModule
  ],
  declarations: [AskAroundYouPage]
})
export class AskAroundYouPageModule {}
