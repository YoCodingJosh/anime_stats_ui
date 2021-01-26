import { Component, Input } from "@angular/core";

import * as c3 from 'c3';

import { IStatsData } from '../../StatsData';

@Component({
  selector: 'animestat-statuschart',
  templateUrl: './statuschart.component.html',
  styleUrls: ['./statuschart.component.css']
})
export class StatusChart {
  @Input() data?: IStatsData | null;

  amountPerAnimeCategoryString: string = "";

  constructor() {
  }

  ngAfterViewInit() {
    let chart = c3.generate({
      bindto: "#animeStatusChart",
      data: {
        type: "donut",
        columns: [
          ["Watching", this.data!.stats.basic.watching],
          ["Completed", this.data!.stats.basic.completed],
          ["Dropped", this.data!.stats.basic.dropped],
          ["On Hold", this.data!.stats.basic.on_hold],
          ["Plan to Watch", this.data!.stats.basic.plan_to_watch]
        ]
      },
      color: {
        pattern: [
          "#2db039",
          "#26448f",
          "#a12f31",
          "#f9d457",
          "#c3c3c3"
        ]
      },
      donut: {
        title: "Anime List Ratio",
      },
    });

    this.amountPerAnimeCategoryString = `Watching: ${this.data!.stats.basic.watching} - Completed: ${this.data!.stats.basic.completed} - Dropped: ${this.data!.stats.basic.dropped} - On Hold: ${this.data!.stats.basic.on_hold} - Plan to Watch: ${this.data!.stats.basic.plan_to_watch}`;
  }
}
