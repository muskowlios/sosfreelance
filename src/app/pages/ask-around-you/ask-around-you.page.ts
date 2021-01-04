import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-around-you',
  templateUrl: './ask-around-you.page.html',
  styleUrls: ['./ask-around-you.page.scss'],
})
export class AskAroundYouPage implements OnInit {
  askaroundlist : string = 'askedbyyou';

  constructor(private router :Router) { }

  ngOnInit() {
  }

  segmentChanged(data: any){
    this.askaroundlist = data.target.value;
  }


  unread(){
this.router.navigate(['/user-profile']);

  }
  addAskAroundYou(){
this.router.navigate(['/add-ask-around-you']);
  }
  goToDetail(){
    this.router.navigate(['/ask-around-you-detail']);
  }
}
