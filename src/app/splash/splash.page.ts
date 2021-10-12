import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/home/tabs/tab1']);
    }, 3000);
   }

  ngOnInit() {
  }

}
