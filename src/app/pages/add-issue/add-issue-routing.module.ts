import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIssuePage } from './add-issue.page';

const routes: Routes = [
  {
    path: '',
    component: AddIssuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIssuePageRoutingModule {}
