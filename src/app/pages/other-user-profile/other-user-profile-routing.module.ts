import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherUserProfilePage } from './other-user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: OtherUserProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherUserProfilePageRoutingModule {}
