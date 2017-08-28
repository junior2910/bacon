import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HabitoNomePage } from '../pages/habito-nome/habito-nome';
import { Login } from '../pages/login/index';
import {HistoricoPage} from '../pages/historico/historico';
import {HabitoDataPage} from '../pages/habito-data/habito-data';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    Login,
    HistoricoPage,
    HabitoNomePage,
    HabitoDataPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    Login,
    HistoricoPage,
    HabitoNomePage,
    HabitoDataPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
