import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { QueryDocumentSnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import columnTypeChecking from 'src/app/helpers/column-type-checking';

import { Column } from 'src/app/components/content/as-table/as-table.model';
import { PagesIdentityModel } from 'src/app/pages/models/pages.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private dbPath: string = 'NON-EXIST-COLLECTION';
  private ColumnModel: Column[] = [];
  private IdentityValue: PagesIdentityModel = {} as PagesIdentityModel;

  private _dbRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this._dbRef = db.collection(this.dbPath);
  }

  setServiceIdentity(
    collectionName: string,
    columnModel: Column[],
    identityValue: PagesIdentityModel
  ) {
    this._dbRef = this.db.collection(collectionName);
    this.ColumnModel = columnModel;
    this.IdentityValue = identityValue;
  }

  async getPart(
    startIndex: number,
    rowPerPage: number
  ): Promise<[QueryDocumentSnapshot<any>[], number]> {
    const totalRowCount = (await this._dbRef.ref.get()).size;

    const skippedRow = startIndex * rowPerPage;

    // This query already ordered by id
    const first =
      startIndex === 0
        ? undefined
        : await this._dbRef.ref.limit(skippedRow).get();

    const lastDoc =
      startIndex === 0 ? undefined : first?.docs[first.docs.length - 1];

    const nextDoc =
      startIndex === 0
        ? this._dbRef.ref.limit(rowPerPage)
        : this._dbRef.ref.startAfter(lastDoc).limit(rowPerPage);

    return [(await nextDoc.get()).docs, totalRowCount];
  }

  getPartSearch(searchKeyword: string): Observable<any> {
    const user = JSON.parse(localStorage.getItem('user')!);
    const token = user.stsTokenManager.accessToken;

    return this.http.get(
      `${environment.functions.url}/${this.IdentityValue.Firebase.Functions.SearchModuleName}?search=${searchKeyword}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
  }

  create(newData: any) {
    const newObj = columnTypeChecking(newData, this.ColumnModel);
    return this._dbRef.add({ ...newObj });
  }

  update(id: string, data: any): Promise<void> {
    const newObj = columnTypeChecking(data, this.ColumnModel);
    return this._dbRef.doc(id).update(newObj);
  }

  delete(id: string): Promise<void> {
    return this._dbRef.doc(id).delete();
  }
}
