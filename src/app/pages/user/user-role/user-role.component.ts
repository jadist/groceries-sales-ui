import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

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

  ngOnDestroy(): void {}

  async refreshTableData(value: PaginatorModel) {
    // Show loading bar
    this.child.showLoadingBar = true;

    const [result, rowCount] = await this.userRoleFs.getPart(
      value.CurrentPageIndex,
      value.RowPerPage
    );

    const rows: Array<UserRoleDocumentModel> = result.map((item) => ({
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
      RowCount: rowCount,
      RowPerPage: value.RowPerPage,
    });

    // hide loading bar
    this.child.showLoadingBar = false;
  }

  renderColumn() {
    this.tableColumns = [
      {
        columnDef: 'Id',
        header: 'Id',
        cell: (element: Record<string, any>) => `${element['Id']}`,
        id: true,
        readonly: true,
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
      {
        columnDef: 'DocVersion',
        header: 'Doc Version',
        cell: (element: Record<string, any>) => `${element['DocVersion']}`,
        hidden: true,
      },
    ];
  }

  //#region Client Output Event
  clientDeleteEvent(Id: string) {
    // Pass the value to This Component's Parent
    this.userRoleFs
      .delete(Id)
      .then((result) => {
        // Get default value
        const defaultPaginator = this.child.getPaginatorValue();

        this.refreshTableData(defaultPaginator);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  clientRefreshRequestEvent() {
    // Get default value
    const defaultPaginator = this.child.getPaginatorValue();

    this.refreshTableData(defaultPaginator);
  }

  clientUpdateEvent(data: UserRoleDocumentModel) {
    this.userRoleFs
      .update(data)
      .then(() => {
        // Refresh
        this.clientRefreshRequestEvent();
      })
      .catch((err) => {
        console.log('err');
      });
  }
  //#endregion
}
