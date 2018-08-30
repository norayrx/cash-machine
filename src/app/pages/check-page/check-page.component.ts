import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-page',
  templateUrl: './check-page.component.html',
  styleUrls: ['./check-page.component.sass']
})
export class CheckPageComponent implements OnInit {
  creditHistory = 'История Вазгена.docx';
  creditHistory2 = '';

  graph = {
    minPos : -0.4,
    maxPos: 0.8,
    step: 0.2,
    options: [
      {name: 'Параметр 1', start: 0, end: 0.7},
      {name: 'Параметр 2', start: 0, end: 0.55},
      {name: 'Параметр 3', start: 0, end: 0.50},
      {name: 'Параметр 4', start: 0, end: 0.38},
      {name: 'Параметр 5', start: 0, end: 0.25},
      {name: 'Параметр 6', start: 0, end: 0.19},
      {name: 'Параметр 7', start: 0, end: 0.05},
      {name: 'Параметр 8', start: 0, end: 0.05},
      {name: 'Параметр 9', start: 0, end: 0.03},
      {name: 'Параметр 10', start: 0, end: 0.03},
      {name: 'Параметр 11', start: 0, end: -0.03},
      {name: 'Параметр 12', start: 0, end: -0.1},
      {name: 'Параметр 13', start: 0, end: -0.18},
      {name: 'Параметр 14', start: 0, end: -0.22},
      {name: 'Параметр 15', start: 0, end: -0.28},
      {name: 'Параметр 16', start: 0, end: -0.3},
      {name: 'Параметр 17', start: 0, end: -0.37},
    ]
  };

  scaleItems = [];



  constructor() { }

  ngOnInit() {
    this.calculateScale(this.graph.minPos, this.graph.maxPos, this.graph.step);
  }

  onFileSelect(event) {
    this.creditHistory = event.target.files[0].name;
  }

  calculateScale(minPos, maxPos, step) {
    for ( let i = minPos; i <= maxPos; i = i + step ) {
      if (i === 0) {
        this.scaleItems.unshift(i);
      } else {
        this.scaleItems.unshift(i.toFixed(1));
      }

    }
  }

  calcHeight(item) {
    let heightGraphTop = (this.graph.maxPos / this.graph.step) * 25;
    let heightGraphDown = ((this.graph.minPos * -1) / this.graph.step) * 25;
    let height;
    let px;
    if (item.end < 0) {
      height = (item.end * heightGraphDown) / this.graph.minPos;
    } else {
      height = (item.end * heightGraphTop) / this.graph.maxPos;
    }
    console.log(height);
    return height;
  }

  calcTop(item) {
    let heightItem = this.calcHeight(item);
    let top: number;
    let steps = this.graph.maxPos / this.graph.step;
    let heightGraph = steps * 25;
    top = heightGraph - heightItem + 1;
    if (item.end < 0) {
      top = heightGraph;
    }
    return top;
  }



}
