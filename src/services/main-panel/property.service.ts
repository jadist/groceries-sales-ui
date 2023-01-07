import { Injectable } from '@angular/core';
import { Subject, startWith, delay } from 'rxjs';
import { MainPanelTableModel } from '../../model/root/main-panel/property';

@Injectable()
export class PropertyService<T> {
  private _mainPanelTable = new Subject<MainPanelTableModel>();
  getRootSidebarProperty() {
    return this._mainPanelTable.asObservable().pipe(
      startWith({
        column: [
          {
            name: 'FirstColumn',
            displayed: 'First Column',
          },
          {
            name: 'SecondColumn',
            displayed: 'First Column',
          },
        ],
        row: [['Cell 1', 'Cell 2'], ['Cell 3', 'Cell 4']],
      }),
      delay(0) // This delay(0), see https://blog.angular-university.io/angular-debugging/
    );
  }
  setRootSidebarProperty(value: MainPanelTableModel) {
    this._mainPanelTable.next(value);
  }
}
