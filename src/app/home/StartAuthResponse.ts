export interface IStartAuthResponse {
  // If we have already successfully authorized and session is still fresh.
  weGood: boolean;

  // The state to use when generating an access token with MAL.
  state: string;

  // Session ID for the server.
  sessionId: string;

  // Client id for communicating with MAL.
  clientId: string;

  // Used to sign requests for MAL.
  pkce: string;
}
