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
import { UserRoleDocumentModel } from 'src/app/pages/user/user-role/model/user-role.model';

import { UserRoleService } from './service/user-role.service';

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

  async refreshTableData(value: PaginatorModel, searchKeyword: string = '') {
    // Show loading bar
    this.child.showLoadingBar = true;

    if (searchKeyword === '') {
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
    } else {
      this.userRoleFs
        .getPartSearch(searchKeyword)
        .subscribe((result: any[]) => {
          const newObj = result.map((item) => {
            return {
              Id: item.Id,
              ...item.Data,
            };
          });

          const rows: Array<UserRoleDocumentModel> = newObj;

          // Update Child Table
          this.child.tableColumns = this.tableColumns;
          this.child.tableData = rows;
          this.child.setTableValue();

          // Update Paginator
          this.child.setPaginatorValue({
            CurrentPageIndex: value.CurrentPageIndex,
            RowCount: 0,
            RowPerPage: value.RowPerPage,
          });

          // hide loading bar
          this.child.showLoadingBar = false;
        });
    }
  }

  renderColumn() {
    this.tableColumns = [
      {
        ColumnDef: 'Id',
        Header: 'Id',
        Cell: (element: Record<string, any>) => `${element['Id']}`,
        id: true,
        Readonly: true,
      },
      {
        ColumnDef: 'UniqueCode',
        Header: 'Unique Code',
        Cell: (element: Record<string, any>) => `${element['UniqueCode']}`,
      },
      {
        ColumnDef: 'RoleName',
        Header: 'Role Name',
        Cell: (element: Record<string, any>) => `${element['RoleName']}`,
      },
      {
        ColumnDef: 'RoleDescription',
        Header: 'Role Description',
        Cell: (element: Record<string, any>) => `${element['RoleDescription']}`,
        RichTextString: true,
      },
      {
        ColumnDef: 'DocVersion',
        Header: 'Doc Version',
        Cell: (element: Record<string, any>) => `${element['DocVersion']}`,
        Hidden: true,
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

  clientRefreshRequestEvent(filterString: string = '') {
    // Get default value
    const defaultPaginator = this.child.getPaginatorValue();

    this.refreshTableData(defaultPaginator, filterString);
  }

  clientUpdateEvent(data: UserRoleDocumentModel) {
    if (data.Id.length === 0) {
      const { Id: _, ...newData } = data;

      newData.DocVersion = '1';

      this.userRoleFs
        .create(newData)
        .then(() => {
          // Refresh
          this.clientRefreshRequestEvent();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const dataId = data.Id;
      const dataBody = {
        DocVersion: data.DocVersion,
        RoleDescription: data.RoleDescription,
        RoleName: data.RoleName,
        UniqueCode: data.UniqueCode,
      };

      this.userRoleFs
        .update(dataId, dataBody)
        .then(() => {
          // Refresh
          this.clientRefreshRequestEvent();
        })
        .catch((err) => {
          console.log('err');
        });
    }
  }
  //#endregion
}
