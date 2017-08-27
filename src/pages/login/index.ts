import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Dashboard} from '../dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'index.html'
})
export class Login {

  constructor(public navCtrl: NavController) {}

  goToDashboard() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Dashboard);
  }

}
