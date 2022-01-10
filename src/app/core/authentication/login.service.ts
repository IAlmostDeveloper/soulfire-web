import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from './interface';
import { Menu } from '@core';
import { map } from 'rxjs/operators';
import { API_URL } from '../interceptors/base-url-interceptor';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient, @Inject(API_URL) private baseUrl?: string) {}

  login(username: string, password: string) {
    return this.http.post<Token>(this.baseUrl + '/auth/login', { username, password });
  }

  register(username: string, password: string) {
    return this.http.post<Token>(this.baseUrl + '/auth/register', {
      username,
      password,
      characterType: 'Специальный агент',
      autoThoughts: [],
      deepThoughts: [],
      middleThoughts: [],
    });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/me');
  }

  menu() {
    return this.http.get<{ menu: Menu[] }>('/me/menu').pipe(map(res => res.menu));
  }
}
