import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskAroundYouPage } from './ask-around-you.page';

const routes: Routes = [
  {
    path: '',
    component: AskAroundYouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskAroundYouPageRoutingModule {}
