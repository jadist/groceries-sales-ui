import { Component, Input } from '@angular/core';
import { ToolbarInputModel } from './topbar.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  @Input() ToolbarInputData: ToolbarInputModel = {
    ToolbarTitle: 'DEFAULT_TITLE',
  };
}
