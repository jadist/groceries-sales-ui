import { Component, OnInit } from '@angular/core';

import { MainPanelSelectionEnum } from 'src/text/root/main-panel/style';
import { SidebarStyleEnum } from 'src/text/root/sidebar/style';
import { PropertyService as RootLayoutService } from '../../../services/root/layout/property.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private rootLayoutServ: RootLayoutService) {}

  ngOnInit(): void {
    this.rootLayoutServ.setRootLayoutProperty({
      MainPanelStyle: MainPanelSelectionEnum.AsTable,
      SidebarStyle: SidebarStyleEnum.TitleOnly,
      ToolbarTitle: 'Login Page',
      UseSidebar: true,
    });
  }
}
