import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/register/users/registermain`, user);
  }

  login(username: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/login/users`, { username, password })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');

    this.router.navigate(['/auth/login']);
  }

  public get userValue() {
    return this.userSubject.value;
  }
}
