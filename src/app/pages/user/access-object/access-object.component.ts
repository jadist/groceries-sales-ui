import { AfterViewInit, Component } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/access-object.model';

import { ModelService } from '../../pages-root/service/model/model.service';

@Component({
  selector: 'app-access-object',
  templateUrl: './access-object.component.html',
  styleUrls: ['./access-object.component.css'],
})
export class AccessObjectComponent implements AfterViewInit {
  constructor(private modelService: ModelService) {}

  ngAfterViewInit() {
    console.log('HIT');
    this.modelService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
