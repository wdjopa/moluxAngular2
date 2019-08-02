import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Molux';
  
  constructor(){
    const config = {
      apiKey: "AIzaSyCKlziXzYBb-qeEGlvcCLv3Hf8ddbiNrZ8",
      authDomain: "molux-a0633.firebaseapp.com",
      databaseURL: "https://molux-a0633.firebaseio.com",
      projectId: "molux-a0633",
      storageBucket: "",
      messagingSenderId: "361938234677",
      appId: "1:361938234677:web:c37e94a9d7b2f12c"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }
}
