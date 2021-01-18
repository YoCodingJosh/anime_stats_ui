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

  generateAuthUrl(pkce: string, clientId: string, state: string): string {
    let challenge: string = pkce;
    var clientId: string = clientId;
    var state: string = state;
    var redirect: string = `${window.location.protocol}//${window.location.host}/api/redirect`;

    return `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${clientId}&code_challenge=${challenge}&code_challenge_method=plain&redirect_uri=${redirect}&state=${state}`;
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
    }).subscribe((data: IStartAuthResponse) => {
      window.localStorage.setItem("state", data.state);
      window.localStorage.setItem("session", data.sessionId);

      let authUrl: string = this.generateAuthUrl(data.pkce, data.clientId, data.state);

      window.location.href = authUrl;

      resultObservable.unsubscribe();
    });
  }
}
