import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  logged: Boolean = false;

  private url: string = 'http://media.mw.metropolia.fi/wbma';

  private user: any = {};

  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }

  setUser = (user) => {
    this.user = user;
    console.log(this.user);
  };

  getUser = () => {
    return this.user;
  }

  login = () => {
    // this.http.post(this.url, this.user,.....)
    return this.http.post(this.url + '/login', this.user)
      .subscribe(
      resp => {
        const dataFromServer = resp.json();
        // save userdata to Local Storage
        this.user = dataFromServer.user;
        this.user.token = dataFromServer.token;
        console.log(this.user);
        localStorage.setItem("user", JSON.stringify(this.user));
        this.logged = true;
        // navigate to 'front'
      },
      error => {
        console.log(error);
      }
      );
  };

}
