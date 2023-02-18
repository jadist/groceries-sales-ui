import { AfterViewInit, Component } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/user-role.model';

import { ModelService } from '../../pages-root/service/model/model.service'; 

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css'],
})
export class UserRoleComponent implements AfterViewInit {
  constructor(private modelService: ModelService) {}

  ngAfterViewInit() {
    this.modelService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
