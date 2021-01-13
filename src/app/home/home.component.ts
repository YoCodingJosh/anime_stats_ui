import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IStartAuthResponse } from './StartAuthResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDoingAuth: boolean = false;
  buttonText: string = "Let's get started!";
  errorText: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  startAuth(): void {
    this.isDoingAuth = true;
    this.buttonText = 'Loading...';

    // Just in case the API messes up or MAL is down (most likely the latter lmao)
    setTimeout(() => {
      this.errorText = "Looks like this is taking longer than expected. Please try refreshing the page!";
    }, 5000);

    let resultObservable = this.http.post<IStartAuthResponse>(environment.apiUrl + "/start-auth", {
      session: window.localStorage.getItem("session"),
      state: window.localStorage.getItem("state")
    }).subscribe();
  }
}
