import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenucalificamePage } from './../menucalificame/menucalificame';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  menucalificame(){
    this.navCtrl.push(MenucalificamePage)
  }
}
