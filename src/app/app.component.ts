import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OverviewPage } from '../pages/overview/overview';
import { InputPage } from '../pages/input/input';
import { StatisticsPage} from '../pages/statistics/statistics';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = OverviewPage;
  
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      { title: 'Übersicht', component: OverviewPage, icon: "ios-home-outline"},
      { title: 'Eingabe', component: InputPage, icon: "ios-create-outline"},
      { title: 'Statistiken', component: StatisticsPage, icon: "ios-stats-outline"}
    ];
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  openPage(page) {
  // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
  this.nav.setRoot(page.component);
  }
}

