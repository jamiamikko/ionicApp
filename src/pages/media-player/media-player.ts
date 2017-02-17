import { Media } from './../../providers/media';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MediaPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-media-player',
  templateUrl: 'media-player.html'
})
export class MediaPlayerPage {

  private singleFile: any = [];
  private id: any;
  private userName: any;
  private favourites = 0;
  private thisPostLiked: boolean;
  public firstParam:any;
  buttonText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaService: Media) {
    this.firstParam = navParams.get("firstPassed");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPlayerPage');
      this.thisPostLiked = false;
      console.log(this.firstParam);
      this.viewMediaFile(this.firstParam);

  }

  viewMediaFile = (fileId) => {
    this.mediaService.getSingleMedia(fileId).subscribe(
      res => {
        this.singleFile = res;
        this.getUserName(this.singleFile.user_id);
        this.getFileFavourites(fileId);

      }
    );

  };

  getUserName = (userId) => {
    this.mediaService.getUserName(userId).subscribe(
      res => {
        this.userName = res.username;
      }
    );
  }

  getFileFavourites = (fileId) => {


    this.mediaService.getFavourites(fileId).subscribe(
      res => {
        this.favourites = res.length;

        for (const key in res) {
          const obj = res[key];
          for (const prop in obj) {

            if (prop === 'user_id') {

              if (obj[prop] === JSON.parse(localStorage.getItem("user")).user_id) {
                console.log(obj[prop]);
                this.thisPostLiked = true;
                this.buttonText = 'Unlike';
              }
              console.log(this.thisPostLiked);
              this.buttonText = 'Like';
            }
          }
        }
      }
    );
  }


  addFavourite = (fileId) => {
    this.mediaService.addToFavourites(fileId);
    this.ionViewDidLoad();
  }

  deleteFavourite = (fileId) => {
    this.mediaService.deleteFromFavourites(fileId);
    this.ionViewDidLoad();
  }

}
