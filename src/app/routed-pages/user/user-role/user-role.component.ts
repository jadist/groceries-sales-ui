import { Component, OnInit } from '@angular/core';

import { AsTableDataModel } from '../../../components/content/as-table/as-table.model';
import { ToolbarInputModel } from '../../../components/main/topbar/topbar.model';

import { FirebaseFirestoreService } from '../../../services/firebase-firestore/firebase-firestore.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css'],
})
export class UserRoleComponent implements OnInit {
  TableDataSource: AsTableDataModel = {
    Column: {
      Value: ['Column1', 'Column2', 'Column3'],
      Name: ['Column 1', 'Column 2', 'Column 3'],
      Hidden: [false, false, false],
    },
    Rows: [
      {
        Id: '1',
        Cols: ['Cell 1', 'Cell 2', 'Cell 3'],
      },
      {
        Id: '2',
        Cols: ['Cell 4', 'Cell 5', 'Cell 6'],
      },
    ],
  };

  ToolbarInputData: ToolbarInputModel = {
    ToolbarTitle: 'User Role Page',
  };

  constructor(private userRoleService: FirebaseFirestoreService) {}

  ngOnInit(): void {}
}
