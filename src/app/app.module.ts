import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { OverviewPage } from '../pages/overview/overview';
import { InputPage } from '../pages/input/input';
import { StatisticsPage} from '../pages/statistics/statistics';
import { modalContent} from '../pages/modalContent/modalContent';



@NgModule({
  declarations: [
    MyApp,
    OverviewPage,
    InputPage,
    StatisticsPage,
    modalContent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OverviewPage,
    InputPage,
    StatisticsPage,
    modalContent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
