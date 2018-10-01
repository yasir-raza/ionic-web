import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private iab: InAppBrowser,private platform: Platform, public navCtrl: NavController) {
      this.platform.ready().then(() => {
          const browser = this.iab.create('http://tsmining.com/lalqila', '_self',{location: 'no', zoom:'no', hideurlbar: 'yes'});
      });
  }

}
