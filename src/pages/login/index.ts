import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


import { DashboardPage } from '../dashboard/dashboard';
import { HabitoNomePage } from '../habito-nome/habito-nome';

interface User {
  login:string,
  senha:string
}
@Component({
  selector: 'page-login',
  templateUrl: 'index.html'
})
export class Login {
  public isRemember: boolean;
  public user:User;
  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) {

    this.isRemember = false;
    this.user = {
      login: "",
      senha: ""
    }
    console.log(this.isRemember);
  }

  goToDashboard() {
    if(this.user.login == 'test@gmail.com' && this.user.senha == '1234') {
      let loader = this.loadingCtrl.create({
        content: "Verificando...",
        duration: 1000
      });

      loader.onDidDismiss(() => {
        //this.navCtrl.setRoot(HabitoNomePage);
        this.navCtrl.push(HabitoNomePage);
      });

      loader.present();
    } else {
      let alert = this.alertCtrl.create({
        subTitle: 'Login ou senha incorretos',
        buttons: ['OK']
      });

      let loader = this.loadingCtrl.create({
        content: "Verificando...",
        duration: 200
      });

      loader.onDidDismiss(() => {
        alert.present();
      });

      loader.present();
    }
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
