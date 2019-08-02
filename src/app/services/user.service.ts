import { User } from '../models/User.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {
  private user: User;
  userSubject = new Subject<User>();

  emitUser() {
    this.userSubject.next(this.user);
  }

  setUser(user: User) {
    this.user = user;
    this.emitUser();
  }
  setTelUser(tel: string) {
    this.user.tel = tel;
    this.emitUser();
  }

  getUser(){
      return this.user;
  }
    
  constructor(private httpClient: HttpClient) { }
}