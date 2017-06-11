import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertStudentPage } from './insert-student';

@NgModule({
  declarations: [
    InsertStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertStudentPage),
  ],
  exports: [
    InsertStudentPage
  ]
})
export class InsertStudentPageModule {}
