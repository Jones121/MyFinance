import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-input',
  templateUrl: 'input.html'
})

export class InputPage {
  myForm : FormGroup;
  submitAttempt: boolean = false;
  buchungen: any = [];
  
  constructor(public navCtrl: NavController, public storage: Storage, public formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      art: ["", Validators.required],
      betrag: ["", Validators.required],
      name: ["", Validators.required],
      datum: ["", Validators.required],
      kategorie: ["", Validators.required],
    });   
  }

  ionViewWillEnter() {
    this.getData();
  }

  // Form zurücksetzen
  resetForm() {
    this.myForm.reset();
    this.submitAttempt = false;
    console.log(this.buchungen);
  }
  
  // Daten aus dem Lokalen Storage ziehen
  getData() {
      var buchungData = localStorage.getItem("Buchungen");
      this.buchungen = JSON.parse(buchungData);

  }
  
  // Formular Daten in den Lokalen Storage schreiben
  setData() {
    this.submitAttempt = true;

    if(this.myForm.valid) {
      var art = this.myForm.get('art').value;
      var betrag = this.myForm.get('betrag').value;
      var name = this.myForm.get('name').value;
      var datum = this.myForm.get('datum').value;
      var kategorie = this.myForm.get('kategorie').value;
     
      if(this.buchungen == null) {
          this.buchungen = [];
      }
      else {
        this.buchungen.push({art: art, betrag: betrag, name: name, datum: datum, kategorie: kategorie});
      }


      localStorage.setItem("Buchungen", JSON.stringify(this.buchungen));
      this.resetForm();
    }
  }
}
