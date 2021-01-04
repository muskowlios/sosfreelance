import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyIssuePageRoutingModule } from './my-issue-routing.module';

import { MyIssuePage } from './my-issue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyIssuePageRoutingModule
  ],
  declarations: [MyIssuePage]
})
export class MyIssuePageModule {}
