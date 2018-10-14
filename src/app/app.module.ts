import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CaratulaPage} from "../pages/caratula/caratula";
import {BiografiaPage} from "../pages/biografia/biografia";
import {ReviewPage} from "../pages/review/review";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CaratulaPage,
    BiografiaPage,
    ReviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CaratulaPage,
    BiografiaPage,
    ReviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
