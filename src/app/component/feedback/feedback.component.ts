import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThanksComponent } from '../thanks/thanks.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  submit(){
    const modal = this.modalCtrl.create({
      component: ThanksComponent,
      cssClass: 'cancel-modal',
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true
    }).then(popElement => {popElement.present(),
    popElement.onDidDismiss().then(resp => {
      this.modalCtrl.dismiss();
    });
   } );
  }

}
