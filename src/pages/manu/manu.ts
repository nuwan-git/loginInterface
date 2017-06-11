import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manu',
  templateUrl: 'manu.html',
})
export class ManuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManuPage');
  }


  InsertStudentPage(){
  this.navCtrl.push('InsertStudentPage');

}

viewMenu(){
  this.navCtrl.push('MapPage');
}
}
