import { AfterViewInit, Component } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/access-object.model';

import { AppService } from '../../../services/model/app.service';

@Component({
  selector: 'app-access-object',
  templateUrl: './access-object.component.html',
  styleUrls: ['./access-object.component.css'],
})
export class AccessObjectComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit() {
    this.appService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
