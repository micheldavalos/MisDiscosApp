import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CaratulaPage} from "../caratula/caratula";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  caratula1 = CaratulaPage

  constructor(public navCtrl: NavController) {

  }

  clickCaratula1() {
    this.navCtrl.push(this.caratula1);
  }

}
