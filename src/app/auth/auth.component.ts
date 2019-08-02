import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  recaptchaVerifier: any;
  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
    this.errorMessage = "";
    this.authStatus = this.authService.isAuth;

    // new firebase.auth.RecaptchaVerifier('recaptcha-container');

  }

  inscription(phoneNumber){
    
    alert(phoneNumber)
    var appVerifier = this.recaptchaVerifier;
   
  }

  OnSubmit(form: NgForm) {
    alert('error')

  }
}
