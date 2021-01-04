import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherUserProfilePageRoutingModule } from './other-user-profile-routing.module';

import { OtherUserProfilePage } from './other-user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherUserProfilePageRoutingModule
  ],
  declarations: [OtherUserProfilePage]
})
export class OtherUserProfilePageModule {}
