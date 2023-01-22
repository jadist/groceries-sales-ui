import { Component } from '@angular/core';
import { AsDetailModel } from 'src/app/components/content/as-detail/as-detail.model';
import { ToolbarInputModel } from 'src/app/components/main/topbar/topbar.model';
import { RoutingEnum } from 'src/app/models/routing.enum';

@Component({
  selector: 'app-dummy-detail',
  templateUrl: './dummy-detail.component.html',
  styleUrls: ['./dummy-detail.component.css'],
})
export class DummyDetailComponent {
  toolbarInputData: ToolbarInputModel = {
    ToolbarTitle: 'Dummy Detail Details',
  };

  detailInput: AsDetailModel = {
    BackUrl: [RoutingEnum.Home],
  };
}
