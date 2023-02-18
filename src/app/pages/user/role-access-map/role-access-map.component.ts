import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/role-access-map.model';

import { ModelService } from '../../pages-root/service/model/model.service';

@Component({
  selector: 'app-role-access-map',
  templateUrl: './role-access-map.component.html',
  styleUrls: ['./role-access-map.component.css'],
})
export class RoleAccessMapComponent implements AfterViewInit {
  constructor(private modelService: ModelService) {}

  ngAfterViewInit() {
    this.modelService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
