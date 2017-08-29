import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {VerHabitosPage} from '../ver-habitos/ver-habitos';
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
  public historicos:object;
  public total:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var habitosStorage = localStorage.getItem('historicoHabitos');
    var total = localStorage.getItem('valorTotal');
    if(habitosStorage === null) {
      this.historicos = [{nome: 'Não há habitos cadastrados', dia: '', valor: ''}];
    } else {
      this.historicos = JSON.parse(habitosStorage);
    }

    if(total === null) {
      this.total = '0';
    } else {
      this.total = localStorage.getItem('valorTotal');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
  }
  goToAdd(){
    this.navCtrl.push(VerHabitosPage);
  }
}
