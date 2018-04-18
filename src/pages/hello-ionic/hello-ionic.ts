import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  @ViewChild('barCanvas') barCanvas;
  public barChart: any;
  public cals: any = {
    today: {
      calories: {
        count: 0,
        color: 'red'
      },
      syns: {
        count: 0,
        color: 'red'
      }
    },
    yesterday: {
      calories: {
        count: 0,
        color: 'red'
      },
      syns: {
        count: 0,
        color: 'red'
      }
    }
  };
  public burn: any = {
    today: {
      burn: {
        count: 0,
        color: 'red'
      },
      min: {
        count: 0,
        color: 'red'
      }
    },
    yesterday: {
      burn: {
        count: 0,
        color: 'red'
      },
      min: {
        count: 0,
        color: 'red'
      }
    }
  };

  constructor(public navCtrl: NavController) {
    this.cals.today.calories.count = 300;
    this.cals.today.calories.color = 'green';
    this.cals.today.syns.count = 3;
    this.cals.today.syns.color = 'green';
    this.cals.yesterday.calories.count = 2400;
    this.cals.yesterday.syns.count = 25;
    this.burn.today.burn.count = 200;
    this.burn.today.burn.color = 'orange';
    this.burn.today.min.count = 10;
    this.burn.today.min.color = 'orange';
    this.burn.yesterday.burn.count = 800;
    this.burn.yesterday.burn.color = 'green';
    this.burn.yesterday.min.count = 60;
    this.burn.yesterday.min.color = 'green';
  }

  ionViewDidLoad() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            label: 'Calories In',
            data: [2100, 1900, 2000, 2300, 2100, 1800, 2500],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 1
          },
          {
            label: 'Calories Out',
            data: [200, 400, 600, 200, 100, 250, 400],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)'

            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              stepSize: 500
            }
          }]
        }
      }

    });
  }
}
