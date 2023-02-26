import { AfterViewInit, Component } from '@angular/core';

import { ColumnModel, IdentityValue } from './model/quotation-detail.model';

import { ModelService } from 'src/app/pages/pages-root/service/model/model.service';

@Component({
  selector: 'app-quotation-detail',
  templateUrl: './quotation-detail.component.html',
  styleUrls: ['./quotation-detail.component.css'],
})
export class QuotationDetailComponent implements AfterViewInit {
  constructor(private modelService: ModelService) {}

  ngAfterViewInit() {
    this.modelService.setChildData({
      Column: ColumnModel,
      PagesIdentity: IdentityValue,
    });
  }
}
