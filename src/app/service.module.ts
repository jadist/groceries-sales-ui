import { NgModule } from '@angular/core';

import { PropertyService as RootLayoutProperty } from '../services/root/layout/property.service';
import { PropertyService as SidebarPropertyService } from '../services/root/sidebar/property.service';
import { PropertyService as TableService } from '../services/main-panel/property.service';

@NgModule({
  providers: [RootLayoutProperty, SidebarPropertyService, TableService],
})
export class ServiceModule {}
