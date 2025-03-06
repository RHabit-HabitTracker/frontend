import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private dummyLoginData: {
    [key: string]: { username: string; password: string };
  } = {
    admin: { username: 'admin', password: 'admin123' },
    user: { username: 'user', password: 'user123' },
    test: { username: 'test', password: 'test123' },
  };

  private currentUserSubject = new BehaviorSubject<string | null>(null);
  currentUser$: Observable<string | null> =
    this.currentUserSubject.asObservable();

  constructor() {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      this.currentUserSubject.next(savedUser);
    }
  }

  login(username: string, password: string): boolean {
    const user = this.dummyLoginData[username];
    if (user && user.password === password) {
      this.currentUserSubject.next(username);
      localStorage.setItem('loggedInUser', username); // Persist across sessions
      return true;
    }
    return false;
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('loggedInUser');
  }
}
