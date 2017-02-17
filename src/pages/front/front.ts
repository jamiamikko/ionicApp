import { MediaPlayerPage } from './../media-player/media-player';
import { Media } from './../../providers/media';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Front page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-front',
  templateUrl: 'front.html'
})
export class FrontPage {

  private mediaFiles: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaService: Media) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrontPage');

    this.mediaService.getNew().subscribe(
      res => {
        this.mediaFiles = res;
      }
    );
  }

  openFile(fileId) {
    console.log(fileId);

    this.navCtrl.push(MediaPlayerPage, {
      firstPassed: fileId,
    });
  }

}
