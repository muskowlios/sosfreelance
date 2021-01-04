import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskAroundYouDetailPage } from './ask-around-you-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AskAroundYouDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskAroundYouDetailPageRoutingModule {}
