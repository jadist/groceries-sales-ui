import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../../dialog/yes-no-dialog/yes-no-dialog.component';
import {
  YesNoDialogEnum,
  YesNoDialogModel,
} from '../../dialog/yes-no-dialog/yes-no-dialog.model';
import { Column } from '../as-table/as-table.model';
import { AsDetailModel } from './as-detail.model';

@Component({
  selector: 'app-as-detail',
  templateUrl: './as-detail.component.html',
  styleUrls: ['./as-detail.component.css'],
})
export class AsDetailComponent<T> implements OnInit, OnChanges {
  @Input() detailInput: AsDetailModel = {} as AsDetailModel;

  @Input() tableColumns: Array<Column> = [];

  @Input() rowData: T = {} as T;

  @Output() deleteEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<T>();

  unifiedReadData: {
    Column: Column;
    Value: string;
  }[] = [];

  edit: boolean = false;

  //#region Custom Input Value Holder
  cbValueHash: IHash = {};

  // Refer to src/app/components/content/as-table/as-table.model.ts
  optionValue: string | undefined;
  //#endregion

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    try {
      const currValue: [string, T][] = Object.entries<T>(
        changes['rowData'].currentValue
      );

      this.unifiedReadData = currValue.map((read) => ({
        Column: this.tableColumns.filter((col) => col.ColumnDef === read[0])[0],
        Value: read[1] as string,
      }));

      this.unifiedReadData.sort((a, b) => {
        if (a.Column.OrderIndex > b.Column.OrderIndex) {
          return 1;
        } else if (a.Column.OrderIndex < b.Column.OrderIndex) {
          return -1;
        } else {
          return 0;
        }
      });

      // If no ID exist, set this.edit to always TRUE
      const colId = this.unifiedReadData.filter((item) => item.Column.id);

      if (colId.length > 0 && colId[0].Value.length > 0) {
        this.edit = false;
      } else {
        this.edit = true;
      }

      // Set the CheckBox dictionary
      this.unifiedReadData
        .filter((item) => item.Column.ValueType === 'boolean')
        .forEach((cb) => {
          this.cbValueHash[cb.Column.ColumnDef] =
            cb.Value.toLowerCase() === 'true';
        });
    } catch {}
  }

  saveItem() {
    // Backend validation check
    const invalidInput = this.unifiedReadData.filter(
      (item) => item.Column.Required === true && item.Value === ''
    );

    if (invalidInput.length > 0) {
      const data: YesNoDialogModel = {
        Title: 'Required Field Notification',
        Message: `Please fill in required field(s)!`,
        SecondMessage: ``,
        Button: {
          No: {
            Hidden: true,
            Name: 'Cancel',
            Value: YesNoDialogEnum.NO,
          },
          Yes: {
            Color: '',
            Name: 'OK',
            Value: YesNoDialogEnum.YES,
          },
        },
      };

      this.dialog.open(YesNoDialogComponent, { data });
    } else {
      this.edit = false;

      // Convert this Data (Array type) into accepted Data (T type)
      const cleanDataArr = this.unifiedReadData.map((item) => {
        if (!item.Column.Hidden) {
          if (item.Column.ValueType === 'boolean') {
            return [
              item.Column.ColumnDef,
              this.cbValueHash[item.Column.ColumnDef],
            ];
          } else if (item.Column.ValueType === 'options') {
            return [item.Column.ColumnDef, this.optionValue];
          } else {
            const key = item.Column.ColumnDef;
            const val = (
              document.getElementById(key.toString()) as HTMLInputElement
            ).value;

            return [key, val];
          }
        } else {
          return [item.Column.ColumnDef, item.Value];
        }
      });

      const tObj: T = Object.fromEntries(cleanDataArr);

      this.updateEvent.emit(tObj);
    }
  }

  deleteItem() {
    const selectedRecord = this.unifiedReadData.filter(
      (item) => item.Column.id
    )[0];
    const Id = selectedRecord.Value;

    const data: YesNoDialogModel = {
      Title: 'Deletion Confirmation',
      Message: `Are you sure you want to delete this record?`,
      SecondMessage: `Selected Id: ${Id}`,
      Button: {
        No: {
          Hidden: false,
          Name: 'Cancel',
          Value: YesNoDialogEnum.NO,
        },
        Yes: {
          Color: 'warn',
          Name: 'Delete',
          Value: YesNoDialogEnum.YES,
        },
      },
    };

    const dialogRef = this.dialog.open(YesNoDialogComponent, { data });

    dialogRef.afterClosed().subscribe((result: YesNoDialogEnum) => {
      if (result === YesNoDialogEnum.YES) {
        this.deleteEvent.emit(Id);
      }
    });
  }

  protected setCeckBoxValue(event: any) {
    this.cbValueHash[event.source.id] = event.checked;
  }

  protected setOptionValue(id: any) {
    this.optionValue = String(id);
  }
}

export interface IHash {
  [details: string]: boolean;
}
