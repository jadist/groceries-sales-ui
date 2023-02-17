import { AfterViewInit, Component } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/user-role.model';

import { AppService } from '../../../services/model/app.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css'],
})
export class UserRoleComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit() {
    this.appService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
