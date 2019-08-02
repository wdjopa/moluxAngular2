import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { User } from '../models/User.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Injectable()

export class AuthService {

      
//   constructor(private httpClient: HttpClient, private userService:UserService, private router : Router) { }

    isAuth = false;

//     createNewUser(email, password) {

//         return new Promise(
//             (resolve, reject) => {
//             firebase.auth().createUserWithEmailAndPassword(email, password).then(
//                 () => {     
//                     resolve();
//                 },
//                 (error) => {
//                 reject(error);
//                 }
//             );
//             }
//         );
//     }

//     signIn(email, password) {
//         return new Promise(
//             (resolve, reject) => {
//                 firebase.auth().signInWithEmailAndPassword(email, password).then(
//                 () => {    
//                     let user = new User(email, password);
//                     this.isAuth = true;
//                     this.userService.setUser(user);
//                     resolve();
//                 },
//                 (error) => {
//                 reject(error);
//                 }
//             );
//             }
//         );
//     }

//     signOut() {
//         firebase.auth().signOut();
//         let user = new User("","");
//         this.userService.setUser(user);
//         this.isAuth = false;
//         this.router.navigate(['/auth']);
//     }
}