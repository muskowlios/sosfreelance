import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-issue-categories',
  templateUrl: './select-issue-categories.page.html',
  styleUrls: ['./select-issue-categories.page.scss'],
})
export class SelectIssueCategoriesPage implements OnInit {
  stories :any[]= [{id: "80301e33-da49-40ac-bfb3-91f2817e59fa", first_name: "Cleaning", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "083800e1-9c4e-474b-92ce-75ef6e9d5425", first_name: "Cure", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "9001fc6f-da4f-40ab-9532-5ba243cf3eab", first_name: "Animal aid", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "5816de0b-7932-413a-b51c-0126895bf18e", first_name: "Car Repair", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "7ed1963d-2050-4511-9391-d4820add4393", first_name: "Accident", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "0d967c82-73cf-4687-a7ec-5601891ade94", first_name: "Help", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"}]

  constructor() { }

  ngOnInit() {
  }

}
