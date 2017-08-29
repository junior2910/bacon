import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HabitoNomePage} from '../habito-nome/habito-nome';
import { AlertController } from 'ionic-angular';
import {HistoricoPage} from '../historico/historico';
/**
 * Generated class for the VerHabitosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-ver-habitos',
  templateUrl: 'ver-habitos.html',
})
export class VerHabitosPage {
  public habitos:object;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,) {
    var habitosStorage = localStorage.getItem('habitos');
    if(habitosStorage === null) {
      this.habitos = [{nome: '', dias: 'Não há habitos cadastrados', valor: ''}];
    } else {
      this.habitos = JSON.parse(habitosStorage);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerHabitosPage');
  }

  goToAdd(){
    this.navCtrl.push(HabitoNomePage);
  }

  poupar(nome, valor){
    function dataAtualFormatada(){
      var data = new Date();
      var dia = data.getDate();
      var diaString = dia.toString();
      if (dia.toString().length == 1)
        diaString = "0"+dia;
      var mes = data.getMonth()+1;
      var mesString = mes.toString();
      if (mes.toString().length == 1)
        mesString = "0"+mes;
      var ano = data.getFullYear();
      return dia+"/"+mesString+"/"+ano;
    }

    var valorTotal = localStorage.getItem('valorTotal');
    var historicoHabitos = JSON.parse(localStorage.getItem('historicoHabitos'));
    var soma = parseInt(valor) + parseInt(valorTotal);
    var now = dataAtualFormatada();
    var formatHistoricoArray = [
      {
        nome: nome,
        dia: now,
        valor: valor,
      }
    ]
    var formatHistorico = {
      nome: nome,
      dia: now,
      valor: valor,
    }

    if(valorTotal != null) {
      localStorage.setItem('valorTotal', soma.toString());
    } else {
      localStorage.setItem('valorTotal', valor);
    }

    if(historicoHabitos != null) {
      historicoHabitos.push(formatHistorico);
      localStorage.setItem('historicoHabitos', JSON.stringify(historicoHabitos));
    } else {
      localStorage.setItem('historicoHabitos', JSON.stringify(formatHistoricoArray));
    }

    console.log(localStorage.getItem('historicoHabitos'));

    let alert = this.alertCtrl.create({
      subTitle: "Valor poupado com sucesso!",
      buttons: [
        {
          text: 'Ver Histórico',
          handler: () => {
            this.navCtrl.push(HistoricoPage);
          }
        },
        {
          text: 'OK',
        }
      ]
    });

    alert.present();
  }

}
