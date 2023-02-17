import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/role-access-map.model';

import { AppService } from '../../../services/model/app.service';

@Component({
  selector: 'app-role-access-map',
  templateUrl: './role-access-map.component.html',
  styleUrls: ['./role-access-map.component.css'],
})
export class RoleAccessMapComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit() {
    this.appService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
