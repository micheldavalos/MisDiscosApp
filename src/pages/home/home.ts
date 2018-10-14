import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CaratulaPage} from "../caratula/caratula";
import {BiografiaPage} from "../biografia/biografia";
import {ReviewPage} from "../review/review";
import {TracksPage} from "../tracks/tracks";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  caratula1 = CaratulaPage;


  biografia = BiografiaPage;


  review = ReviewPage;

  tracks = TracksPage;

  constructor(public navCtrl: NavController) {

  }

  clickCaratula1() {
    this.navCtrl.push(this.caratula1);
  }

  clickArtista() {
    this.navCtrl.push(this.biografia);
  }

  clickAlbum() {
    this.navCtrl.push(this.review);
  }

  clickTracks() {
    this.navCtrl.push(this.tracks);
  }

}
