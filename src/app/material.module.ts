import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
