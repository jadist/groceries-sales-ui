import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { AsTableComponent } from 'src/app/components/content/as-table/as-table.component';

import {
  Column,
  PaginatorModel,
} from 'src/app/components/content/as-table/as-table.model';
import { ToolbarInputModel } from 'src/app/components/main/topbar/topbar.model';
import { UserRoleDocumentModel } from 'src/app/models/firebase/firestore/user/user-role.model';

import { UserRoleService } from 'src/app/services/firebase/firestore/user/user-role/user-role.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css'],
})
export class UserRoleComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('myChild') child!: AsTableComponent<UserRoleDocumentModel>;

  private firestoreTable: Subscription | undefined;

  toolbarInputData: ToolbarInputModel = {
    ToolbarTitle: 'User Role',
  };

  tableColumns: Array<Column> = [];

  constructor(private userRoleFs: UserRoleService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderColumn();

      // Get default value
      const defaultPaginator = this.child.getPaginatorValue();

      this.refreshTableData(defaultPaginator);
    });
  }

  ngOnDestroy(): void {
    if (this.firestoreTable) {
      this.firestoreTable.unsubscribe;
    }
  }

  async refreshTableData(value: PaginatorModel) {
    const totalRowCount = (await this.userRoleFs.getAll().ref.get()).size;

    const startIndex = value.CurrentPageIndex;
    const rowPerPage = value.RowPerPage;

    const skippedRow = startIndex * rowPerPage;

    // This query already ordered by id
    const first =
      startIndex === 0
        ? undefined
        : await this.userRoleFs.getAll().ref.limit(skippedRow).get();

    const lastDoc =
      startIndex === 0 ? undefined : first?.docs[first.docs.length - 1];

    const nextDoc =
      startIndex === 0
        ? this.userRoleFs.getAll().ref.limit(rowPerPage)
        : this.userRoleFs.getAll().ref.startAfter(lastDoc).limit(rowPerPage);

    const items = (await nextDoc.get()).docs;

    const rows: Array<UserRoleDocumentModel> = items.map((item) => ({
      Id: item.id,
      DocVersion: item.data().DocVersion,
      RoleDescription: item.data().RoleDescription,
      RoleName: item.data().RoleName,
      UniqueCode: item.data().UniqueCode,
    }));

    // Update Child Table
    this.child.tableColumns = this.tableColumns;
    this.child.tableData = rows;
    this.child.setTableValue();

    // Update Paginator
    this.child.setPaginatorValue({
      CurrentPageIndex: value.CurrentPageIndex,
      RowCount: totalRowCount,
      RowPerPage: value.RowPerPage,
    });
  }

  renderColumn() {
    this.tableColumns = [
      {
        columnDef: 'Id',
        header: 'Id',
        cell: (element: Record<string, any>) => `${element['Id']}`,
        id: true,
      },
      {
        columnDef: 'UniqueCode',
        header: 'Unique Code',
        cell: (element: Record<string, any>) => `${element['UniqueCode']}`,
      },
      {
        columnDef: 'RoleName',
        header: 'Role Name',
        cell: (element: Record<string, any>) => `${element['RoleName']}`,
      },
      {
        columnDef: 'RoleDescription',
        header: 'Role Description',
        cell: (element: Record<string, any>) => `${element['RoleDescription']}`,
        richTextString: true,
      },
      // {
      //   columnDef: 'DocVersion',
      //   header: 'Doc Version',
      //   cell: (element: Record<string, any>) => `${element['DocVersion']}`,
      //   hidden: true,
      // },
    ];
  }
}
