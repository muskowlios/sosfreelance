import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { ApiService } from "src/app/services/api/api.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.page.html",
  styleUrls: ["./faq.page.scss"],
})
export class FaqPage implements OnInit {
  responseData: any;
  faqs: any;
  isFaqAvailable: any = false;
  constructor(
    public apiService: ApiService,
    public userService: UserService,
    public toastController: ToastController
  ) {}
  ngOnInit() {
    this.apiService.faq().subscribe(
      (response) => {
        this.responseData = response;
        if (this.responseData.status) {
          this.isFaqAvailable = true;
          this.faqs = this.responseData.result;
          // this.presentToast(this.responseData.message);
        } else {
          // this.presentToast(this.responseData.message);
        }
      },
      (err) => {
        this.presentToast(err);
      }
    );
  } 
 
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  initializeItems() {
    this.faqs = this.responseData.result;
  }

  getFaq(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
        this.isFaqAvailable = true;
        this.faqs = this.faqs.filter((item) => {
            return (item.question.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    } else {
        this.isFaqAvailable = false;
    }
}
}
