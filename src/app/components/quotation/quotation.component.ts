import { Component, OnInit } from '@angular/core';

import { MainPanelSelectionEnum } from 'src/text/root/main-panel/style';
import { SidebarStyleEnum } from 'src/text/root/sidebar/style';
import { PropertyService as RootLayoutService } from '../../../services/root/layout/property.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css'],
})
export class QuotationComponent implements OnInit {
  constructor(private rootLayoutServ: RootLayoutService) {}

  ngOnInit(): void {
    this.rootLayoutServ.setRootLayoutProperty({
      MainPanelStyle: MainPanelSelectionEnum.AsDetails,
      SidebarStyle: SidebarStyleEnum.TitleOnly,
      ToolbarTitle: 'Quotation Page',
      UseSidebar: true,
    });
  }
}
