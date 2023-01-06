import { Injectable } from '@angular/core';
import { Subject, startWith, delay } from 'rxjs';
import { PropertyModel } from '../../../model/root/layout/property';
import { SidebarStyleEnum } from '../../../text/root/sidebar/style';
import { MainPanelSelectionEnum } from '../../../text/root/main-panel/style';

@Injectable()
export class PropertyService {
  private _rootLayoutProperty = new Subject<PropertyModel>();
  getRootLayoutProperty() {
    return this._rootLayoutProperty.asObservable().pipe(
      startWith({
        ToolbarTitle: 'Jadist Groceries',
        UseSidebar: true,
        SidebarStyle: SidebarStyleEnum.TitleOnly,
        MainPanelStyle: MainPanelSelectionEnum.AsTable,
      }),
      delay(0) // This delay(0), see https://blog.angular-university.io/angular-debugging/
    );
  }
  setRootLayoutProperty(value: PropertyModel) {
    this._rootLayoutProperty.next(value);
  }
}
