import { Component, Input } from '@angular/core';
import { AsTableDataModel } from './as-table.model';

@Component({
  selector: 'app-as-table',
  templateUrl: './as-table.component.html',
  styleUrls: ['./as-table.component.css'],
})
export class AsTableComponent {
  @Input() TableData: AsTableDataModel | undefined;
}
