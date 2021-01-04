import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMediaPage } from './view-media.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMediaPageRoutingModule {}
