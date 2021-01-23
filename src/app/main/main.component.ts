import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLoading: boolean = true;
  loadingGif: string = "";

  constructor() { }

  ngOnInit(): void {
    this.loadingGif = this.getLoadingGif();
  }

  getLoadingGif(): string {
    var gifs: string[] = [
      "https://cdn.codingjosh.com/anime_stats/loading/akari_sleepy.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/bell_hestia_teeth_brushing.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/chika_dancing.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/chika_loading.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/dino_nosebleed.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/hakase_popcorn.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/konosuba.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/nichijou.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/niconiconii.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/rikka_finger_spin.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/sagiri_dancing.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/shamiko_confused_2.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/shamiko_ganbare.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/shamiko_shake.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/six_consoles.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/tohru.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/tohru_kanna.gif",
      "https://cdn.codingjosh.com/anime_stats/loading/umaru.gif",
    ];
  
    return gifs[Math.floor(Math.random() * gifs.length)];
  }
}
