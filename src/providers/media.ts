import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

/*
  Generated class for the Media provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Media {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private token: any;

  private favouriteFile: any = {
    'file_id': null
  };

  constructor(private http: Http) {
    console.log('Hello Media Provider');
  }

  getMedia = () => {
    return this.http.get(this.url + '/media')
      .map(
      res =>
        res.json()
      );
  }

  getNew = () => {
    return this.http.get(this.url + '/media?limit=100')
      .map(
      res =>
        res.json()
      );
  }

  getSingleMedia = (fileId) => {
    return this.http.get(this.url + '/media/' + fileId)
      .map(
      res =>
        res.json()
      );
  }

  getFavourites = (fileId) => {

    return this.http.get(this.url + '/favourites/file/' + fileId)
      .map(
      res =>
        res.json()
      );
  };

  getUserName = (userId) => {
    this.token = JSON.parse(localStorage.getItem("user")).token;

    let headers = new Headers({ 'x-access-token': this.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.url + '/users/' + userId, options)
      .map(
      res =>
        res.json()
      );
  };

  addToFavourites = (fileId) => {
    this.token = JSON.parse(localStorage.getItem("user")).token;
    this.favouriteFile.file_id = fileId;

    let headers = new Headers({ 'x-access-token': this.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url + '/favourites', this.favouriteFile, options)
      .subscribe(
      res => {
        const dataFromServer = res.json();

        // console.log(dataFromServer);
      },
      error => {
        console.log(error);
      }
      );

  }

  deleteFromFavourites = (fileId) => {
    this.token = JSON.parse(localStorage.getItem("user")).token;

    let headers = new Headers({ 'x-access-token': this.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.url + '/favourites/file/' + fileId, options)
      .subscribe(
      res => {
        const dataFromServer = res.json();

        // console.log(dataFromServer);
      },
      error => {
        console.log(error);
      }
      );
  }
}
