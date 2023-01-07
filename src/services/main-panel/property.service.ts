import { Injectable } from '@angular/core';
import { Subject, startWith, delay } from 'rxjs';
import { MainPanelTableModel } from '../../model/root/main-panel/property';

@Injectable()
export class PropertyService {
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
            displayed: 'Second Column',
          },
          {
            name: 'ThirdColumn',
            displayed: 'Third Column',
          },
          {
            name: 'FourthColumn',
            displayed: 'Fourth Column',
          },
        ],
        row: [
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
        ],
      }),
      delay(0) // This delay(0), see https://blog.angular-university.io/angular-debugging/
    );
  }
  setRootSidebarProperty(value: MainPanelTableModel) {
    this._mainPanelTable.next(value);
  }
}
