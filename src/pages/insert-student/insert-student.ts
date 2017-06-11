import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DisplayStudentPage } from "../display-student/display-student";
import 'rxjs/add/operator/map';


/**
 * Generated class for the InsertStudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-insert-student',
  templateUrl: 'insert-student.html',
})
export class InsertStudentPage {
  public form    : FormGroup;
   private baseURI               : string  = "http://localhost/";
    public hideForm               : boolean = false;
      public isEdited               : boolean = false;
       public pageTitle              : string;

         public studentId         : any;
         public    studentConNum         : any;
         public studentName  : any;  
  constructor(public navCtrl: NavController, public NP: NavParams,public http   : Http,public fb : FormBuilder,public toastCtrl  : ToastController) {

      this.form = fb.group({
         "stuId"                  : ["", Validators.required],
         "stuName"           : ["", Validators.required],
         "stuConNum"        : ["",Validators.required]
      });
  }


  ionViewWillEnter()
   {
      this.resetFields();

      if(this.NP.get("record"))
      {
         this.isEdited      = true;
         this.selectEntry(this.NP.get("record"));
         this.pageTitle     = 'Amend entry';
      }
      else
      {
         this.isEdited      = false;
         this.pageTitle     = 'Create entry';
      }
   }
     // Assign the navigation retrieved data to properties
   // used as models on the page's HTML form
   selectEntry(item)
   {
      this.studentId        = item.stuId;
      this.studentName = item.stuName;
      this.studentConNum        = item.stuConNum;
   }


 // Clear values in the page's HTML form fields
   resetFields() : void
   {
      this.studentId      = "";
      this.studentName    = "";
       this.studentConNum = "";
   }




  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertStudentPage');
  }

   saveEntry()
   {
      let stuId          : string = this.form.controls["stuId"].value,
          stuName  : string    = this.form.controls["stuName"].value,
          stuConNo : string = this.form.controls["stuConNum"].value;

   //    if(this.isEdited)
      // {
      //    this.updateEntry(name, description);
      // }
      // else
      // {
         this.createEntry(stuId, stuName,stuConNo);
   //   }
  }
  

    createEntry(stuId, stuName,stuConNo)
   {
    //  console.log(stuId, stuName,stuConNo);
      let body     : string   = "key=create&stuId=" + stuId+ "&stuName=" + stuName+"&stuConNo_=" + stuConNo,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "manage-student.php";

      this.http.post(url, body, options)

      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm   = true;
           
            this.sendNotification(`Congratulations the Student: ${stuName} was successfully added`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });

       

   }

    sendNotification(message)  : void
	   {
		  let notification = this.toastCtrl.create({
			  message       : message,
			  duration      : 3000
		  });
		  notification.present();
	   }

     viewEntry_(){
       this.navCtrl.push('DisplayStudentPage');
     }
}
