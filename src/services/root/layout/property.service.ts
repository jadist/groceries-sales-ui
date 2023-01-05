import { Injectable } from '@angular/core';
import { Subject, startWith } from 'rxjs';
import { PropertyModel } from '../../../model/root/layout/property';

@Injectable()
export class PropertyService {
  private _rootLayoutProperty = new Subject<PropertyModel>();
  getRootLayoutProperty() {
    return this._rootLayoutProperty.asObservable().pipe(
      startWith({
        ToolbarTitle: 'Jadist Groceries',
        UseSidebar: true,
      })
    );
  }
  setRootLayoutProperty(value: PropertyModel) {
    this._rootLayoutProperty.next(value);
  }
}
