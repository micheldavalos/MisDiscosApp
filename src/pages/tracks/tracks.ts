import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TracksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks',
  templateUrl: 'tracks.html',
})
export class TracksPage {
  tracks = [
    '1.	To The Bone (6.41)',
    '2.	Nowhere Now (4.04)',
    '3.	Pariah (4.44)',
    '4.	The Same Asylum As Before (5.14)',
    '5.	Refuge (6.42)',
    '6.	Permanating (3.35)',
    '7.	Blank Tapes (2.09)',
    '8.	People Who Eat Darkness (6.03)',
    '9.	Song of I (5.22)',
    '10.	Detonation (9.20)',
    '11.	Song of Unborn (5.56)'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracksPage');
  }

}
