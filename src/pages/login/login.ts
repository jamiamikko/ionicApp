import { FrontPage } from './../front/front';
import { NavController } from 'ionic-angular';
import { LoginService } from './../../providers/login-service';
import { Component } from '@angular/core';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  constructor(private navCtrl: NavController, private loginService: LoginService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if (localStorage.getItem("user") !== null) {
      this.loginService.setUser(JSON.parse(localStorage.getItem("user")));
      this.loginService.logged = true;

    } else if (this.loginService.getUser().password !== undefined) {
      this.loginService.login();
    }
  }


  login = (value: any) => {
    //console.log(value);
    this.loginService.setUser(value);
    this.loginService.login();
    this.navigateTo();
  }

  navigateTo() {
    this.navCtrl.setRoot(FrontPage, {});
  }
}
