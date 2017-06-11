import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InsertStudentPage } from "../insert-student/insert-student";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the DisplayStudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-display-student',
  templateUrl: 'display-student.html',
})
export class DisplayStudentPage {
public items : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : Http  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayStudentPage');
 //    this.load();
  }

   ionViewWillEnter()
   {
      this.load();
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()
   {
      this.http.get('http://localhost/retrieve-student.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
         console.log(data);
      });
   }

   viewEntry(param)
   {
     console.log(param );
      this.navCtrl.push('InsertStudentPage', param);
   }

}
