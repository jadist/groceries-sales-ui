import { Injectable } from '@angular/core';
import { Subject, startWith } from 'rxjs';
import { PropertyModel as SidebarProperty } from '../../../model/root/sidebar/property';

@Injectable()
export class PropertyService {
  private _rootSidebarProperty = new Subject<SidebarProperty>();
  getRootSidebarProperty() {
    return this._rootSidebarProperty.asObservable().pipe(
      startWith({
        title: 'Sidebar Title',
        description: 'Sidebar description',
        urlParamName: 'sidebar',
        data: [
          {
            sub_title: 'sidebar item 1',
            sub_desc: 'sidebar description 1',
            urlParamValue: '1',
          },
          {
            sub_title: 'sidebar item 2',
            sub_desc: 'sidebar description 2',
            urlParamValue: '2',
          },
        ],
      })
    );
  }
  setRootSidebarProperty(value: SidebarProperty) {
    this._rootSidebarProperty.next(value);
  }
}
