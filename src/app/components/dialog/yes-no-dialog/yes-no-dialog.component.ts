import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YesNoDialogModel } from './yes-no-dialog.model';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.css'],
})
export class YesNoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: YesNoDialogModel) {}
}
