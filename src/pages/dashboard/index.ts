import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'index.html'
})
export class Dashboard {

  constructor(public navCtrl: NavController) {}

  goToLogin() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.pop();
  }

}
