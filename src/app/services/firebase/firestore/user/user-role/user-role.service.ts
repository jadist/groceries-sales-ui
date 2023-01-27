import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { QueryDocumentSnapshot } from '@angular/fire/compat/firestore';

import { UserRoleDocumentModel } from 'src/app/models/firebase/firestore/user/user-role.model';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private dbPath = '/USER-ROLE';

  private _userRoleRef: AngularFirestoreCollection<UserRoleDocumentModel>;

  constructor(private db: AngularFirestore) {
    this._userRoleRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<UserRoleDocumentModel> {
    return this._userRoleRef!;
  }

  async getPart(
    startIndex: number,
    rowPerPage: number
  ): Promise<[QueryDocumentSnapshot<UserRoleDocumentModel>[], number]> {
    const totalRowCount = (await this._userRoleRef.ref.get()).size;

    const skippedRow = startIndex * rowPerPage;

    // This query already ordered by id
    const first =
      startIndex === 0
        ? undefined
        : await this._userRoleRef.ref.limit(skippedRow).get();

    const lastDoc =
      startIndex === 0 ? undefined : first?.docs[first.docs.length - 1];

    const nextDoc =
      startIndex === 0
        ? this._userRoleRef.ref.limit(rowPerPage)
        : this._userRoleRef.ref.startAfter(lastDoc).limit(rowPerPage);

    return [(await nextDoc.get()).docs, totalRowCount];
  }

  create(userRoleData: UserRoleDocumentModel) {
    this._userRoleRef.add({
      ...userRoleData,
    });
  }

  update(id: string, data: any): Promise<void> {
    return this._userRoleRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this._userRoleRef.doc(id).delete();
  }
}
