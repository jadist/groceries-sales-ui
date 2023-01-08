import { NgModule } from '@angular/core';

import { PropertyService as RootLayoutProperty } from '../services/root/layout/property.service';
import { PropertyService as SidebarPropertyService } from '../services/root/sidebar/property.service';
import { MainPanelDisplayService as TableService } from '../services/main-panel/main-panel-display.service';

@NgModule({
  providers: [RootLayoutProperty, SidebarPropertyService, TableService],
})
export class ServiceModule {}
