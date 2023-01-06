import { Injectable } from '@angular/core';
import { Subject, startWith, delay } from 'rxjs';
import { PropertyModel as SidebarProperty } from '../../../model/root/sidebar/property';

@Injectable()
export class PropertyService {
  private _rootSidebarProperty = new Subject<SidebarProperty>();
  getRootSidebarProperty() {
    return this._rootSidebarProperty.asObservable().pipe(
      startWith({
        title: 'Sidebar Title',
        description: 'Sidebar description',
        urlParamName: '',
        data: [
          {
            sub_title: 'sidebar item 1',
            sub_desc: 'sidebar description 1',
            urlParamValue: 'login',
          },
          {
            sub_title: 'sidebar item 2',
            sub_desc: 'sidebar description 2',
            urlParamValue: 'register',
          },
        ],
      }),
      delay(0) // This delay(0), see https://blog.angular-university.io/angular-debugging/
    );
  }
  setRootSidebarProperty(value: SidebarProperty) {
    this._rootSidebarProperty.next(value);
  }
}
