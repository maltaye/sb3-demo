import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new BehaviorSubject<string>('Angular App');

  getTitle(): string {
    return this.titleSubject.value;
  }

  setTitle(title: string): void {
    this.titleSubject.next(title);
  }

  getTitle$(): Observable<string> {
    return this.titleSubject.asObservable();
  }
}