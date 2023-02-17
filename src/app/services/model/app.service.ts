import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Column } from 'src/app/components/content/as-table/as-table.model';
import { PagesIdentityModel } from 'src/app/pages/models/pages.model';

interface ChildModel {
  Column: Column[];
  PagesIdentity: PagesIdentityModel;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private childModel$ = new BehaviorSubject<ChildModel>({} as ChildModel);

  setChildData(val: ChildModel) {
    this.childModel$.next(val);
  }

  getChildData() {
    return this.childModel$.asObservable();
  }
}
