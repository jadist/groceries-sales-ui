import { Component, Input } from '@angular/core';
import { ToolbarInputModel, HomeBackEnum } from './topbar.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  @Input() ToolbarInputData: ToolbarInputModel = {
    ToolbarTitle: 'DEFAULT_TITLE',
    HomeAction: {
      HomeBack: HomeBackEnum.HOME,
      Destination: ['/'],
    },
    Notification: {
      Hidden: false,
    },
  };

  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
}
