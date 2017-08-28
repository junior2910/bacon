import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  ionViewDidLoad() {
    
  }

}
