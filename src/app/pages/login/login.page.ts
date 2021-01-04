import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api/api.service";
import { UserService } from "src/app/services/user/user.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  user: any;
  submitted = false;
  responseData: any;
  constructor(
    private menuController: MenuController,
    private router: Router,
    public formBuilder: FormBuilder,
    public apiService : ApiService,
    public userService : UserService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      remember: [false],
    });
    // localStorage.setItem('SeesionUser',this.user)
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  register() {
    this.router.navigate(["/home"]);
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.apiService.signIn(this.loginForm.value).subscribe(response => {
      this.responseData = response;
      if (this.responseData.status) {
        this.userService.updateUser(this.responseData.result);
        localStorage.setItem('user', JSON.stringify(this.responseData.result));
        localStorage.setItem('singedIn', this.loginForm.value.remember);
        this.loginForm.reset();
        this.presentToast(this.responseData.message);     
          this.router.navigate(['/home']);        
      }
      else {
        this.presentToast(this.responseData.message); 
      }
    }, err => {
      this.presentToast(this.responseData.message); 
    }
    );
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
