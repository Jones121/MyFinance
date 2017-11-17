import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';


@Component({
    selector: 'page-statistics',
    templateUrl: 'statistics.html'
})
export class StatisticsPage {

    @ViewChild('Einkommensvergleich') doughnutChartE;
    @ViewChild('Ausgabenvergleich') doughnutChartA;
    @ViewChild('Einkommensveraenderung') lineChartE;
    @ViewChild('Ausgabensveraenderung') lineChartA;


    doughnutChartEinkommen: any;
    doughnutChartAusgaben: any;
    lineChartEinkommensveraenderung: any;
    lineChartAusgabensveraenderung: any;

    buchungen: any = [];
    sum:number;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
    this.getData();

        this.doughnutChartEinkommen = new Chart(this.doughnutChartE.nativeElement, {

            type: 'doughnut',
            data: {
                labels: this.getEinkommenLabels(),
                datasets: [{
                    label: '# of Votes',
                    data: this.getEinkommen(),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }

        });

        this.doughnutChartAusgaben = new Chart(this.doughnutChartA.nativeElement, {

            type: 'doughnut',
            data: {
                labels: this.getAusgabenLabels(),
                datasets: [{
                    label: '# of Votes',
                    data: this.getAusgaben(),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }

        });

        this.lineChartEinkommensveraenderung = new Chart(this.lineChartE.nativeElement, {

            type: 'line',
            data: {
                labels: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                datasets: [
                    {
                        label: "Einkommen",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.getEinkommen(),
                        spanGaps: false,
                    }
                ]
            }

        });

        this.lineChartAusgabensveraenderung = new Chart(this.lineChartA.nativeElement, {

            type: 'line',
            data: {
                labels: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                datasets: [
                    {
                        label: "Ausgaben",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.getAusgaben(),
                        spanGaps: false,
                    }
                ]
            }

        });

    }

    // Daten aus dem Lokalen Storage ziehen
    getData() {
        var buchungData = localStorage.getItem("Buchungen");
        this.buchungen = JSON.parse(buchungData);
        console.log(this.buchungen);
    }

    // Alle Einkommens Kategorie herausfiltern
    getEinkommenLabels() {
        let labels = [];
        for(let i = 0; i < this.buchungen.length; i++) {
            if(this.buchungen[i].art == 'Einnahme') {
                labels.push(this.buchungen[i].kategorie);
            }
        }
        return labels;
    }

    // Alle Ausgaben Kategorien herausfiltern
    getAusgabenLabels() {
        let labels = [];
        for(let i = 0; i < this.buchungen.length; i++) {
            if(this.buchungen[i].art == 'Ausgabe') {
                labels.push(this.buchungen[i].kategorie);
            }
        }
        return labels;
    }

    // Alle Einkommens Beträge herausfiltern
    getEinkommen() {
        let Einkommen = [];
        for (let i = 0; i < this.buchungen.length; i++) {
            if(this.buchungen[i].art == 'Einnahme') {
                Einkommen.push(this.buchungen[i].betrag);  
            }   
        }
        return Einkommen;
    }

    // Alle Ausgabens Beträge herausfiltern
    getAusgaben() {
        let Ausgaben = [];
        for (let i = 0; i < this.buchungen.length; i++) {
            if(this.buchungen[i].art == 'Ausgabe') {
                Ausgaben.push(this.buchungen[i].betrag);  
            }
        }
        return Ausgaben
    }
}
