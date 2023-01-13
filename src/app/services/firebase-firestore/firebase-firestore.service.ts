import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { UserRoleDocumentModel } from '../../models/firebase-firestore/user/user-roles.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseFirestoreService {
  private dbPath = '/USER-ROLE';

  userRoleRef: AngularFirestoreCollection<UserRoleDocumentModel> | undefined;

  constructor(private db: AngularFirestore) {
    this.userRoleRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<UserRoleDocumentModel> {
    return this.userRoleRef!;
  }
}
