import { Component, Input } from '@angular/core';
import { ComponentEntryInputModel } from './entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  @Input() ComponentConfig: ComponentEntryInputModel | undefined;
}
