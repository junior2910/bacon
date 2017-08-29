import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the HabitoValorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-habito-valor',
  templateUrl: 'habito-valor.html',
})
export class HabitoValorPage {
  public valorHabito: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,  private loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitoValorPage');
  }

  goToSaveHabit(){;
    if(this.valorHabito) {

      let loader = this.loadingCtrl.create({
        content: "Salvando...",
        duration: 1000
      });

      const habitos = [
        {
          nome: localStorage.setItem("valorHabito", this.valorHabito.toString())
        }
      ];

      localStorage.setItem("valorHabito", this.valorHabito.toString());

      loader.onDidDismiss(() => {
        this.navCtrl.setRoot(DashboardPage);
      });

      loader.present();

    } else {

      let alert = this.alertCtrl.create({
        subTitle: 'Insra um valor para o seu hábito.',
        buttons: ['OK']
      });

      alert.present();

    }
  }

}
