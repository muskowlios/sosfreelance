import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectIssueCategoriesPageRoutingModule } from './select-issue-categories-routing.module';

import { SelectIssueCategoriesPage } from './select-issue-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectIssueCategoriesPageRoutingModule
  ],
  declarations: [SelectIssueCategoriesPage]
})
export class SelectIssueCategoriesPageModule {}
