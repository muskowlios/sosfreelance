import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<string>('');
  cast = this.user.asObservable();
  constructor() {
    this.user.next(JSON.parse(localStorage.getItem('user')));
   }

  updateUser(newUser){
    this.user.next(newUser);
  }
}
