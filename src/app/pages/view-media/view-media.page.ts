import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-media',
  templateUrl: './view-media.page.html',
  styleUrls: ['./view-media.page.scss'],
})
export class ViewMediaPage implements OnInit {
  stories :any[]= [{id: "80301e33-da49-40ac-bfb3-91f2817e59fa", first_name: "Torrance", last_name: "Muller", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "083800e1-9c4e-474b-92ce-75ef6e9d5425", first_name: "Julien", last_name: "Johns", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "9001fc6f-da4f-40ab-9532-5ba243cf3eab", first_name: "Roberto", last_name: "O'Kon", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "5816de0b-7932-413a-b51c-0126895bf18e", first_name: "Santino", last_name: "Dicki", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "7ed1963d-2050-4511-9391-d4820add4393", first_name: "Antwan", last_name: "Kovacek", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "f378dcb6-ae75-43e0-a430-fc17e3a68459", first_name: "Jamey", last_name: "Pollich", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "5cb2764f-a903-417e-a787-13dcd50fcabb", first_name: "Carolina", last_name: "Durgan", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "40784179-4d2a-4b6c-8f4f-98f29727e03d", first_name: "Cathrine", last_name: "Pollich", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "612a8527-1d4d-4308-bbbc-d0f34dfef4a7", first_name: "Dewayne", last_name: "Blanda", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"},
  {id: "0d967c82-73cf-4687-a7ec-5601891ade94", first_name: "Daisha", last_name: "Witting", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-212-164060.png"}]
  constructor() { }

  showImageModal:boolean = false;
  currentImgSrc;

  images:any[] = [
    {
      img_url:"https://b.zmtcdn.com/data/dish_photos/7d8/b011ceb4d889a635e9bf26e47aadb7d8.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
      img_url:"https://b.zmtcdn.com/data/dish_photos/925/277dba667342b92fcd9383aa8015a925.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
      img_url:"https://b.zmtcdn.com/data/dish_photos/6c6/cb77a6ea31c0c955a0858dba2fd676c6.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
      img_url:"https://b.zmtcdn.com/data/dish_photos/0fe/72dbecebd65a5d6ce10c28586f2d10fe.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
      img_url:"https://b.zmtcdn.com/data/dish_photos/a8c/7811925c2d8e585ac32285c762a68a8c.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
  ]

  ngOnInit() {
  }

  onShowImageModal(src?){
    this.showImageModal=!this.showImageModal;
    this.currentImgSrc = src;
  }

}
