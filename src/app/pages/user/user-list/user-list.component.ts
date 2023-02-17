import { AfterViewInit, Component } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/user-list.model';

import { AppService } from '../../../services/model/app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit() {
    this.appService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
