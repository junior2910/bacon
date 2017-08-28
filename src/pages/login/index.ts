import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'index.html'
})
export class Login {
  public isRemember: boolean;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

    this.isRemember = false;
    console.log(this.isRemember);
  }

  goToDashboard() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.setRoot(DashboardPage);
  }

  presentToast() {
    if(this.isRemember) {
      let toast = this.toastCtrl.create({
        message: 'Vamos lembrar de você',
        duration: 1000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
  }

}
