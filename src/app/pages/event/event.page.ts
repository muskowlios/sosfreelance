import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  eventslist : string = 'myEvents';

  constructor(private router :Router) { }

  ngOnInit() {
  }

  segmentChanged(data: any){
    this.eventslist = data.target.value;
  }
  addEvent(){
    this.router.navigate(['/add-event']);
  }
}
