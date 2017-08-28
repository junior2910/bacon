import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import {Dashboard} from '../dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'index.html'
})
export class Login {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {}

  goToDashboard() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Dashboard);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Vamos lembrar de você',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
