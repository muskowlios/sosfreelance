import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from '@ionic-native/native-geocoder/ngx';
import { ActionSheetController, AlertController, MenuController, ModalController } from '@ionic/angular';
import { FeedbackComponent } from 'src/app/component/feedback/feedback.component';

declare var google;

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.page.html',
  styleUrls: ['./issue-details.page.scss'],
})
export class IssueDetailsPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  issueDetailsCardBody:boolean = false

  latitude: number;
  longitude: number;
  dataReturned: any;
  
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public actionSheetController: ActionSheetController,
    public menuController: MenuController,
    public router :Router,
    public alertController: AlertController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadMap();
  } 

  loadMap() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        const latLng = new google.maps.LatLng(
          resp.coords.latitude,
          resp.coords.longitude
        );
        const mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        };

        this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );

        this.map.addListener('dragend', () => {
          this.latitude = this.map.center.lat();
          this.longitude = this.map.center.lng();

          this.getAddressFromCoords(
            this.map.center.lat(),
            this.map.center.lng()
          );
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log('getAddressFromCoords ' + lattitude + ' ' + longitude);
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    };

    this.nativeGeocoder
      .reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = '';
        const responseAddress = [];
        for (const [key, value] of Object.entries(result[0])) {
          if (value.length > 0) {
            responseAddress.push(value);
          }
        }
        responseAddress.reverse();
        for (const value of responseAddress) {
          this.address += value + ', ';
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = 'Address Not Available!';
      });
  } 
  giveHelp(){
    this.router.navigate(['/issues']);
  }
  async  emergencyBtn(){
    const alert = await this.alertController.create({
      header: 'Emergency!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Placeholder 2'
        },      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  feedback(){
    const modal = this.modalCtrl.create({
      component: FeedbackComponent,
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

  onShowIssueDetail(){
    this.issueDetailsCardBody = !this.issueDetailsCardBody;
  }
}
