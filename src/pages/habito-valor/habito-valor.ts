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
  public total:object;
  public second:object;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,  private loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitoValorPage');
  }

  goToSaveHabit(){

    if(this.valorHabito) {

      localStorage.setItem("valorHabito", this.valorHabito.toString());

      let loader = this.loadingCtrl.create({
        content: "Salvando...",
        duration: 1000
      });

      var nome = localStorage.getItem("nomeHabito");
      var dias = localStorage.getItem("diasHabito");
      var valor = localStorage.getItem("valorHabito");
      var totalHabitos = JSON.parse(localStorage.getItem("habitos"));

      this.total = [{
        nome: nome,
        dias: dias,
        valor: valor,
      }]

      this.second = {
        nome: nome,
        dias: dias,
        valor: valor,
      }

      if(totalHabitos != null) {

        totalHabitos.push(this.second);
        localStorage.setItem("habitos", JSON.stringify(totalHabitos));

      } else {
        localStorage.setItem("habitos", JSON.stringify(this.total));
      }

      console.log(localStorage.getItem("habitos"));

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
