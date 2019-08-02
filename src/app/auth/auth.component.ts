import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  email: string;
  password: string;
  errorMessage: String;
  type:string;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.errorMessage = "";
    this.authStatus = this.authService.isAuth;
  }

  OnSubmit(form: NgForm) {
    this.email = form.value["email"];
    this.password = form.value["password"];
    
    if (this.type == 'login') {

      this.authService.signIn(this.email, this.password).then(
        (a: any) => {
          console.log(a);
          // this.router.navigate(['new-message']);
        },
        (error) => {
          console.log(error);
          if (error.code == "auth/user-not-found") {
            this.errorMessage = "Identifiants non reconnus !";
          }
          else {
            this.errorMessage = error;
          }
        }

      )
    }

    else{
      this.authService.createNewUser(this.email, this.password).then(
        (a: any) => {
          console.log(a);
          // this.router.navigate(['new-message']);
        },
        (error) => {
          console.log(error);
          if (error.code == "auth/user-not-found") {
            this.errorMessage = "Identifiants non reconnus !";
          }
          else {
            this.errorMessage = error;
          }
        }

      )
    }
  }

}
