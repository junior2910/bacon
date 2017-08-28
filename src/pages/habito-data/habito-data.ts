import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the HabitoNomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-habito-data',
  templateUrl: 'habito-data.html',
})
export class HabitoDataPage {
  public nomeHabito: string;
  public dias: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,) {
    this.nomeHabito = localStorage.getItem("nomeHabito");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitoDataPage');
  }

  goToHabitoValor(){
    if(this.dias) {

      localStorage.setItem("diasHabito", this.dias);
      // this.navCtrl.push(HabitoDataPage);
      console.log(localStorage.getItem("diasHabito"));
    } else {

      let alert = this.alertCtrl.create({
        subTitle: 'Insra algum dia para o seu hábito.',
        buttons: ['OK']
      });

      alert.present();

    }
  }

}
