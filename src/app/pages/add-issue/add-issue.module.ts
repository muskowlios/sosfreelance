import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIssuePageRoutingModule } from './add-issue-routing.module';

import { AddIssuePage } from './add-issue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIssuePageRoutingModule
  ],
  declarations: [AddIssuePage]
})
export class AddIssuePageModule {}
