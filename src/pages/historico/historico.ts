import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HabitoNomePage} from '../habito-nome/habito-nome';
/**
 * Generated class for the HistoricoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
  }
  goToAdd(){
    this.navCtrl.push(HabitoNomePage);
  }
}
