import { FrontPage } from './../front/front';
import { UploadService } from './../../providers/upload-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the Upload page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private uploadService: UploadService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  upload = (value, event: any) => {

    this.uploadService.setFormData(value, event);
    this.uploadService.upload();
    this.navigateTo();
  };

  navigateTo() {
    this.navCtrl.setRoot(FrontPage, {});
  }

}
