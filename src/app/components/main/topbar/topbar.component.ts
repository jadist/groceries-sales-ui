import { Component, Input } from '@angular/core';
import { ToolbarInputModel, HomeBackEnum } from './topbar.model';
import { RoutingEnum } from '../../../models/routing.enum';

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

  loginPage = RoutingEnum.Login;
}
