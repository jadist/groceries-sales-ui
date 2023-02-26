import { AfterViewInit, Component } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/quotation.model';

import { ModelService } from 'src/app/pages/pages-root/service/model/model.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css'],
})
export class QuotationComponent implements AfterViewInit {
  constructor(private modelService: ModelService) {}

  ngAfterViewInit() {
    this.modelService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
