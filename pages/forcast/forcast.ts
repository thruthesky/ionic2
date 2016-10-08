import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the Forcast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forcast',
  templateUrl: 'forcast.html'
})
export class Forcast {
  

  constructor(public navCtrl: NavController,public navParams: NavParams) {

  let weatherList=navParams.get('weather');
  console.log( 'Forcast::constructor()', this.navParams.data );
  console.log( 'Forcast::constructor()', weatherList );


  }

  ionViewDidLoad() {
    console.log('Hello Forcast Page');
  }

}
