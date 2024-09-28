import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'http://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getFollowers(userName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${userName}/followers`);
  }
}
