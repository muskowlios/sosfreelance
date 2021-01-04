import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAskAroundYouPage } from './add-ask-around-you.page';

const routes: Routes = [
  {
    path: '',
    component: AddAskAroundYouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAskAroundYouPageRoutingModule {}
