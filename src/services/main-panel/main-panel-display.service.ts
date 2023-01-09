import { Injectable } from '@angular/core';
import { Subject, startWith, delay } from 'rxjs';
import {
  MainPanelTableModel,
  MainPanelSelectedId,
  MainPanelTableGenericModel,
} from '../../model/root/main-panel/property';

@Injectable()
export class MainPanelDisplayService<T> {
  private _mainPanelTable = new Subject<MainPanelTableModel>();
  getDataAsTable() {
    return this._mainPanelTable.asObservable().pipe(
      startWith({
        Column: [
          {
            Name: 'FirstColumn',
            Displayed: 'First Column',
          },
          {
            Name: 'SecondColumn',
            Displayed: 'Second Column',
          },
          {
            Name: 'ThirdColumn',
            Displayed: 'Third Column',
          },
          {
            Name: 'FourthColumn',
            Displayed: 'Fourth Column',
          },
        ],
        Rows: [
          {
            Id: '1',
            Cols: ['Cell 1', 'Cell 2', 'Cell Extra 12', 'Empty 1'],
          },
          {
            Id: '2',
            Cols: ['Cell 3', 'Cell 4', 'Cell Extra 34', 'Empty 2'],
          },
          {
            Id: '3',
            Cols: ['Cell 5', 'Cell 6', 'Cell Extra 56', 'Empty 3'],
          },
          {
            Id: '4',
            Cols: ['Cell 7', 'Cell 8', 'Cell Extra 78', 'Empty 4'],
          },
        ],
        UrlParamName: 'urlParam',
      }),
      delay(0) // This delay(0), see https://blog.angular-university.io/angular-debugging/
    );
  }
  setNewDataInTable(value: MainPanelTableModel) {
    this._mainPanelTable.next(value);
  }

  private _selectedTableId = new Subject<MainPanelSelectedId>();
  getSelectedTableId() {
    return this._selectedTableId
      .asObservable()
      .pipe(startWith(['0']), delay(0));
  }
  setSelectedTableId(value: MainPanelSelectedId) {
    return this._selectedTableId.next(value);
  }

  private _genericMainPanelTable = new Subject<MainPanelTableGenericModel<T>>();
  getMainPanelData() {
    return this._genericMainPanelTable
      .asObservable()
      .pipe(startWith({} as MainPanelTableGenericModel<T>, delay(0)));
  }
  setMainPaneldata(value: MainPanelTableGenericModel<T>) {
    return this._genericMainPanelTable.next(value);
  }
}
