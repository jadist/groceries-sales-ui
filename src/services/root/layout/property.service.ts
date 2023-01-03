import { Injectable } from '@angular/core';
import { Subject, startWith } from 'rxjs';

@Injectable()
export class PropertyService {
  private _toolbarTitle = new Subject<string>();
  
  getToolbarTitle() {
    return this._toolbarTitle
      .asObservable()
      .pipe(startWith('Jadist Groceries'));
  }
  setToolbarTitle(value: string) {
    this._toolbarTitle.next(value);
  }
}
