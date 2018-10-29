import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
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

  // disco = {
  //   imagen: "../assets/toTheBone.jpg",
  //   artista: "Steven Wilson",
  //   album: "To The Bone",
  //   lanzamiento: "2017",
  //   valoracion: [1, 2, 3, 4]
  // };

  discos = [
    {imagen: "../assets/toTheBone.jpg", artista: "Steven Wilson", album: "To The Bone", lanzamiento: "2017", valoracion: [1, 2, 3, 4], color: "#DB2B39", funcion: "clickCaratula1" },
    {imagen: "../assets/astrix.jpg", artista: "Astrix", album: "He.Art", lanzamiento: "2016", valoracion: [1, 2, 3, 4], color: "#F5F5F5", funcion: this.clickCaratula1 },
    {imagen: "../assets/lo-eterno.jpg", artista: "La Barranca", album: "Lo Eterno", lanzamiento: "2018", valoracion: [1, 2, 3, 4, 5], color: "#456990", funcion: this.clickCaratula1},
    {imagen: "../assets/dulzura.jpeg", artista: "Cultura Profética", album: "La Dulzura", lanzamiento: "2010", valoracion: [1, 2, 3, 4], color: "#FFFFFF", funcion: this.clickCaratula1}
  ];

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
