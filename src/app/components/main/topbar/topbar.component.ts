import { Component, Input } from '@angular/core';
import { ToolbarInputModel } from './topbar.model';
import { RoutingEnum } from '../../../models/routing.enum';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  @Input() ToolbarInputData: ToolbarInputModel = {
    ToolbarTitle: 'DEFAULT_TITLE',
  };

  loginPage = RoutingEnum.Login;
}
