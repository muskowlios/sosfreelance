import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideDrawerComponent } from './slide-drawer/slide-drawer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GiverCancelComponent } from './giver-cancel/giver-cancel.component';
import { ThanksComponent } from './thanks/thanks.component';



@NgModule({
  declarations: [
    SlideDrawerComponent,
    FeedbackComponent,
    GiverCancelComponent,
    ThanksComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SlideDrawerComponent]
})
export class ComponentsModule { }
