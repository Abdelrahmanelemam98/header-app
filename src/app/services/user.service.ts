import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://dummyjson.com/users/1';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<any>(this.baseUrl);
  }
}
