import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.page.html',
  styleUrls: ['./enrolled.page.scss'],
})
export class EnrolledPage implements OnInit {
  enrolledlist : string = 'pending';

  constructor() { }

  ngOnInit() {
  }
  segmentChanged(data: any){
    this.enrolledlist = data.target.value;
  }


}
