import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule],
  exports: [MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule],
})
export class MaterialModule {}
