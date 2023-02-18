import { AfterViewInit, Component } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/user-list.model';

import { ModelService } from '../../pages-root/service/model/model.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements AfterViewInit {
  constructor(private modelService: ModelService) {}

  ngAfterViewInit() {
    this.modelService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
