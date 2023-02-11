import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { QueryDocumentSnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { FirestoreCollections } from 'src/app/models/firebase/firestore/firestore-collections';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private dbPath = FirestoreCollections.UserList;

  private _dbRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this._dbRef = db.collection(this.dbPath);
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
      `${environment.functions.url}/jktUserRoleSearchView?search=${searchKeyword}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
  }

  create(userRoleData: any) {
    return this._dbRef.add({
      ...userRoleData,
    });
  }

  update(id: string, data: any): Promise<void> {
    return this._dbRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this._dbRef.doc(id).delete();
  }
}
