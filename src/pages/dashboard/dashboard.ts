import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HabitoNomePage } from '../habito-nome/habito-nome';
import {HistoricoPage} from '../historico/historico';
import {VerHabitosPage} from '../ver-habitos/ver-habitos';


/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */



interface User {
  Nome:string
}
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  public user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.user = {
      Nome: "Gustavo"
    }

  }

  goToHistorico(){
    this.navCtrl.push(HistoricoPage);
  }
  goToHabito(){
    this.navCtrl.push(HabitoNomePage);
  }
  goToVerHabitos(){
    this.navCtrl.push(VerHabitosPage);
  }

  ionViewDidLoad() {

  }

}
