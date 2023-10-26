import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';
//import { map } from 'rxjs/operators';
//import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  constructor(private serieService: SerieService) {}
  average: string = '';
  series: Array<Serie> = [];

  getSeries() {
    this.serieService.getSeries().subscribe((series) => {
      let total = 0;
      series.forEach((s) => {
        total += s.seasons;
      });
      let average = total / series.length;
      this.series = series;
      this.average = 'Seasons average: ' + average;
    });
  }

  /*getAverage() {
    let average = 0;
    this.serieService
      .getSeries()
      .pipe(
        map((series: Serie[]) => {
          const seasons = series.map((s) => s['seasons']);
          const total = seasons.reduce(
            (acumulada, actual) => acumulada + actual,
            0
          );
          return total / seasons.length;
        })
      )
      .subscribe((average) => {
        this.average = average;
      });
    this.average = average;
  }*/

  ngOnInit() {
    this.getSeries();
    //this.getAverage();
  }
}
