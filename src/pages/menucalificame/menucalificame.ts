import { ExplorarPage } from './../explorar/explorar';
import { CalificamePage } from './../calificame/calificame';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenucalificamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menucalificame',
  templateUrl: 'menucalificame.html',
})
export class MenucalificamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenucalificamePage');
  }
 calificame(){
    this.navCtrl.push(CalificamePage)
  }
   explorar(){
    this.navCtrl.push(ExplorarPage)
  }
}
