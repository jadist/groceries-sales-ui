import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { UserRoleDocumentModel } from 'src/app/models/firebase/firestore/user/user-role.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseFirestoreService {
  private dbPath = '/USER-ROLE';

  private _userRoleRef: AngularFirestoreCollection<UserRoleDocumentModel> | undefined;

  constructor(private db: AngularFirestore) {
    this._userRoleRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<UserRoleDocumentModel> {
    return this._userRoleRef!;
  }
}
