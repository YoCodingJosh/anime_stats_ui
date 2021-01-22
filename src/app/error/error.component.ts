import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  state: string = "";
  errorGif: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    let x = localStorage.getItem("state");

    this.state = x === null ? "NULL" : x;

    this.errorGif = this.getErrorGif();
  }

  getErrorGif(): string {
    let gifs: string[] = [
      "https://cdn.codingjosh.com/anime_stats/error/aqua_crying.gif",
      "https://cdn.codingjosh.com/anime_stats/error/chika_worried.gif",
      "https://cdn.codingjosh.com/anime_stats/error/hakase_scared.gif",
      "https://cdn.codingjosh.com/anime_stats/error/hitoribocchi_panic.gif",
      "https://cdn.codingjosh.com/anime_stats/error/kaguya_panicing.gif",
      "https://cdn.codingjosh.com/anime_stats/error/mahiru_punch.gif",
      "https://cdn.codingjosh.com/anime_stats/error/roko_mad.gif",
      "https://cdn.codingjosh.com/anime_stats/error/sagiri_closing_door.gif",
      "https://cdn.codingjosh.com/anime_stats/error/sagiri_phone.gif",
      "https://cdn.codingjosh.com/anime_stats/error/satania_crying.gif",
      "https://cdn.codingjosh.com/anime_stats/error/satania.gif",
      "https://cdn.codingjosh.com/anime_stats/error/shamiko_angry.gif",
      "https://cdn.codingjosh.com/anime_stats/error/shamiko_confused.gif",
      "https://cdn.codingjosh.com/anime_stats/error/suya_mad.gif",
      "https://cdn.codingjosh.com/anime_stats/error/suya_panic.gif",
      "https://cdn.codingjosh.com/anime_stats/error/umaru_cartridge.gif",
      "https://cdn.codingjosh.com/anime_stats/error/xqc_slam_desk.gif",
    ];
  
    return gifs[Math.floor(Math.random() * gifs.length)];
  }

  goBack(): void {
    this.router.navigateByUrl("/home");
  }
}
