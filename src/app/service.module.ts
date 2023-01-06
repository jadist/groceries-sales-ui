import { NgModule } from '@angular/core';

import { PropertyService as RootLayoutProperty } from '../services/root/layout/property.service';
import { PropertyService as SidebarPropertyService } from '../services/root/sidebar/property.service';

@NgModule({
  providers: [RootLayoutProperty, SidebarPropertyService],
})
export class ServiceModule {}
