import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GiverCancelComponent } from 'src/app/component/giver-cancel/giver-cancel.component';
// import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-givers',
  templateUrl: './givers.page.html',
  styleUrls: ['./givers.page.scss'],
})
export class GiversPage implements OnInit {
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cancleGiver(){
    const modal = this.modalCtrl.create({
      component: GiverCancelComponent,
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
  // presentConfirm() {
  //   this.alertCtrl.create({
  //     header:'<ion-icon name="add-circle"></ion-icon>some text',
  //     subHeader:"ARE YOU SURE TO CANCEL ISSUE!",
  //     buttons:['Confirm', 'Cancel']
  //   }).then((confirmElement) =>{
  //     confirmElement.present();
  //   })
  // }

}
