import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IStatsData } from '../StatsData';
import { IUserProfileDetails } from './UserProfileDetails';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLoading: boolean = true;
  loadingGif: string = "";
  showWelcome: boolean = false;
  loadingText: string = "Starting the application...";

  userData?: IUserProfileDetails | null = null;

  statsData?: IStatsData | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadingGif = this.getLoadingGif();

    let resultObservable = this.http.post<IUserProfileDetails>("/api/basic-info", {
      session: window.localStorage.getItem("session"),
      state: window.localStorage.getItem("state")
    }).subscribe({
      next: data => {
        this.userData = data;
      },
      complete: () => {
        this.showWelcome = true;

        this.startProcessing();

        resultObservable.unsubscribe();
      }
    });
  }

  startProcessing(): void {
    // Set the initial text.
    this.loadingText = this.getRandomLoadingText();

    // Randomly set it to a random string.
    let textUpdateInterval = setInterval(() => {
      // Only do it sometimes.
      if (Math.floor(Math.random() * 100) % 2 === 0) {
        this.loadingText = this.getRandomLoadingText();
      }
    }, 600);

    // kick off the process
    let resultObservable = this.http.post<IStatsData>("/api/get-stats", {
      session: window.localStorage.getItem("session"),
      state: window.localStorage.getItem("state")
    }).subscribe({
      next: data => {
        this.statsData = data;
      },
      complete: () => {
        clearInterval(textUpdateInterval);

        resultObservable.unsubscribe();

        console.log(this.statsData);

        this.isLoading = false;
      }
    });
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

  getRandomLoadingText(): string {
    let texts: string[] = [
      "Crunching the numbers...",
      "Doing my math homework...",
      "Totally *not* watching anime...",
      "Analyzing NASA's landing speeds...",
      "Loading...",
      "Massaging the data...",
      "Taking a lunch break...",
      "Totally *not* watching hentai...",
      "Processing...",
      "Working on getting the data to you...",
      `Trying to figure out ${Math.floor(Math.random() * 9)}+${Math.floor(Math.random() * 9)}...`,
      "Thinking...",
      "Taking a quick nap...",
      "Running with toast in my mouth...",
      "Trying not to get isekai'd by a truck...",
      "Doing the math...",
      "Peeking at my classmate's homework...",
      "This shouldn't take too long...",
      "Loading...",
      "Jamming to anime OP's...",
      "Working...",
      "Doing something...",
      "Working a shift at Wagnaria...",
      "Counting my anime figures...",
      "Counting my waifus...",
      "Practicing explosion magic...",
      "Pondering...",
      "Sleeping...",
      "Counting consoles... (six so far)",
      "Working hard or hardly working...",
      "Defeating the demon king with the power of friendship...",
      "Processing...",
      "Listening to the bad guy's speech...",
      "読み込んでいます / Now loading",
      "Pushing the pencil...",
      "Counting computers... (ten so far)",
      "Thinking of things to say here...",
      "If you see this, you're awesome!",
      "Ugh. Fine. I guess you are my little PogChamp. Come here.",
      "Slamming the fart...",
      "Ganbare!",
      "Do weeb androids dream of electric waifus?",
      "Boop beep bop.. I'm a robot. Analyzing your data...",
      "Analyzing...",
      "Totally *not* watching VTubers...",
      "a",
      "Counting...",
      "Thinking... (my brain hurts!)",
      "Practicing my ahegao face...",
      "Looking for more anime figures to buy...",
      "Please wait...",
      "nyanpasu!",
      "ちょっと まって ください / Please wait a moment",
      "moe moe kyun",
    ];
  
    return texts[Math.floor(Math.random() * texts.length)];
  }
}
