import { NgModule } from '@angular/core';

import { PropertyService } from '../services/root/layout/property.service';
import { PropertyService as SidebarPropertyService } from '../services/root/sidebar/property.service';

@NgModule({
  providers: [PropertyService, SidebarPropertyService],
})
export class ServiceModule {}
