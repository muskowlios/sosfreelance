import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectDistancePage } from './select-distance.page';

const routes: Routes = [
  {
    path: '',
    component: SelectDistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDistancePageRoutingModule {}
