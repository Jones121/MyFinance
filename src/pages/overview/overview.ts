import { Component } from '@angular/core';
import { NavController,  ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { modalContent } from '../modalContent/modalContent';
import { InputPage } from '../input/input';
 

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {
  buchungen: any = [];
  sum:number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.getData();
  }

  // Modal öffnen und Buchungs Daten mitschicken
  openModal(buchung) {
      let modal = this.modalCtrl.create(modalContent, {'buchung' : buchung});
      modal.present();
    }
  
  // Daten aus dem Lokalen Storage ziehen
  getData() {
      var buchungData = localStorage.getItem("Buchungen");
      this.buchungen = JSON.parse(buchungData);
  }

  // Summe aus allen Beträgen berechnen
  getSum() {
    this.sum = 0;
    if(this.buchungen != null) {
      for(let i = 0; i < this.buchungen.length; i++) {
        if(this.buchungen[i].art == 'Einnahme') {
          this.sum += parseFloat(this.buchungen[i].betrag);
        }
        else {
          this.sum -= parseFloat(this.buchungen[i].betrag);
        }
      }
      return this.roundTo(this.sum,2); 
    }
    else {
      return 0;
    }
  }

  // Genaue Runden Funktion
  roundTo(n, digits) {
        if (digits === undefined) {
            digits = 0;
        }

        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        return Math.round(n) / multiplicator;
    }

  // Buchung von der Liste entfernen und dann die Buchungen im Lokalen Storage aktualisieren
  removeBuchung(buchung){
    for(let i = 0; i < this.buchungen.length; i++) {
      if(this.buchungen[i] == buchung){
        this.buchungen.splice(i, 1);
      }    
    }
    this.setData();
  }

  // Daten in Lokalen Storage einfügen
  setData() {
    localStorage.setItem("Buchungen", JSON.stringify(this.buchungen));
  }  
}