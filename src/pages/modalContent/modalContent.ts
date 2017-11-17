import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modalContent',
  templateUrl: 'modalContent.html'
})
export class modalContent {
  buchungen:any = [];

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.buchungen = this.navParams.get('buchung');
  }

  // Modal schließen
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
