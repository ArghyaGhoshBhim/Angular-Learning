import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../model/authResponse.model';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_KEY = 'AIzaSyAWAIF55HUfm62gz6vhPiSf-Td78FeeTyQ';
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.httpClient.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.email,
      data.refreshToken,
      expirationDate,
      data.localId
    );
    return user;
  }
}
