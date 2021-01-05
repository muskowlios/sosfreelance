import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ask Around You',
      url: '/ask-around-you',
      icon: 'paper-plane'
    },
    {
      title: 'Issues',
      url: '/issues',
      icon: 'construct'
    },
    {
      title: 'Events',
      url: '/event',
      icon: 'aperture'
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Help',
      url: '/help-center',
      icon: 'man'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'documents'
    },
    {
      title: 'Policies',
      url: '/privacy-policy',
      icon: 'book'
    },   
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'information-circle'
    }   
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logOut(){
    this.router.navigate(['/login']);
  }
  goToProfile(){
    this.router.navigate(['/user-profile']);
  }

  closeMenu() {
    this.menu.close() ;
  }
}
