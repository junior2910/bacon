import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HabitoDataPage } from '../habito-data/habito-data';

/**
 * Generated class for the HabitoNomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-habito-nome',
  templateUrl: 'habito-nome.html',
})
export class HabitoNomePage {
  public nomeHabito: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitoNomePage');
  }

  goToHabitoData(){
    console.log(this.nomeHabito);
    if(this.nomeHabito) {

      localStorage.setItem("nomeHabito", this.nomeHabito);
      this.navCtrl.push(HabitoDataPage);

    } else {

      let alert = this.alertCtrl.create({
        subTitle: 'Insra um nome para o seu hábito.',
        buttons: ['OK']
      });

      alert.present();

    }
  }

}
