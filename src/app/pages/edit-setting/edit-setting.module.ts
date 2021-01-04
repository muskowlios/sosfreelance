import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSettingPageRoutingModule } from './edit-setting-routing.module';

import { EditSettingPage } from './edit-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSettingPageRoutingModule
  ],
  declarations: [EditSettingPage]
})
export class EditSettingPageModule {}
