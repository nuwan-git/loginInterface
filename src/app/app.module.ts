import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ManuPage } from "../pages/manu/manu";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DisplayStudentPage } from "../pages/display-student/display-student";
import { InsertStudentPage } from "../pages/insert-student/insert-student";
import { SearchStudentPage } from "../pages/search-student/search-student";
import { LoginPage } from "../pages/login/login";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // ManuPage,
   // DisplayStudentPage,
 //   InsertStudentPage,
  //  SearchStudentPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // ManuPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  //  DisplayStudentPage,
  //  InsertStudentPage,
//    SearchStudentPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
