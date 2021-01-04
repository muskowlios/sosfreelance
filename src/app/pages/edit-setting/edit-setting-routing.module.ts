import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSettingPage } from './edit-setting.page';

const routes: Routes = [
  {
    path: '',
    component: EditSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSettingPageRoutingModule {}
