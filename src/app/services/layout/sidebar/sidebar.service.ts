import { Injectable } from '@angular/core';
import { delay, startWith, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _hideSidebarLayout = new Subject<boolean>();
  getHideSidebarLayout() {
    return this._hideSidebarLayout.asObservable().pipe(
      startWith(false),
      delay(0) // This delay(0), see https://blog.angular-university.io/angular-debugging/
    );
  }
  setHideSidebarLayout(value: boolean) {
    this._hideSidebarLayout.next(value);
  }

  constructor() {}
}
