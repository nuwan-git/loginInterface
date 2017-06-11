import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InsertStudentPage} from '../insert-student/insert-student';
import {SearchStudentPage} from '../search-student/search-student';
import { ManuPage } from "../manu/manu";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {

  constructor(public navCtrl: NavController) {
   
  }





  addEntry()
   {
      this.navCtrl.push('ManuPage');
   }

}
