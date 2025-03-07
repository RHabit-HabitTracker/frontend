import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private dummyLoginData: { username: string; password: string }[] = [
    { username: 'admin@test.de', password: 'admin123' },
    { username: 'user@test.de', password: 'user123' },
    { username: 'test@test.de', password: 'test123' },
  ];

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
    console.log(username);
    console.log(password);
    const user = this.dummyLoginData.find((x) => x.username == username);
    console.log(user);
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
