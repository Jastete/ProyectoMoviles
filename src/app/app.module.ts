import { GaleriaPage } from './../pages/galeria/galeria';
import { ExplorarPage } from './../pages/explorar/explorar';
import { CalificamePage } from './../pages/calificame/calificame';
import { MenucalificamePage } from './../pages/menucalificame/menucalificame';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenucalificamePage,
    CalificamePage,
    ExplorarPage,
    GaleriaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenucalificamePage,
    CalificamePage,
    ExplorarPage,
    GaleriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
