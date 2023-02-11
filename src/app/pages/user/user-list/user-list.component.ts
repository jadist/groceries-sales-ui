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
import { UserListDocumentModel } from 'src/app/pages/user/user-list/model/user-list.model';

import { UserListService } from './service/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('myChild') child!: AsTableComponent<UserListDocumentModel>;

  toolbarInputData: ToolbarInputModel = {
    ToolbarTitle: 'User List',
  };

  tableColumns: Array<Column> = [];

  constructor(private firestoreService: UserListService) {}

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
      const [result, rowCount] = await this.firestoreService.getPart(
        value.CurrentPageIndex,
        value.RowPerPage
      );

      const rows: Array<UserListDocumentModel> = result.map((item) => ({
        Id: item.id,
        ...item.data(),
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
      this.firestoreService
        .getPartSearch(searchKeyword)
        .subscribe((result: any[]) => {
          const newObj = result.map((item) => {
            return {
              Id: item.Id,
              ...item.Data,
            };
          });

          const rows: Array<UserListDocumentModel> = newObj;

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
        ColumnDef: 'Username',
        Header: 'Username',
        Cell: (element: Record<string, any>) => `${element['Username']}`,
      },
      {
        ColumnDef: 'EmailAddress',
        Header: 'Email Address',
        Cell: (element: Record<string, any>) => `${element['EmailAddress']}`,
      },
      {
        ColumnDef: 'FullName',
        Header: 'Full Name',
        Cell: (element: Record<string, any>) => `${element['FullName']}`,
      },
      {
        ColumnDef: 'PhoneNo',
        Header: 'Phone No',
        Cell: (element: Record<string, any>) => `${element['PhoneNo']}`,
      },
      {
        ColumnDef: 'UserRoleReference',
        Header: 'User Role Reference',
        Cell: (element: Record<string, any>) => `${element['UserRoleReference']}`,
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
    this.firestoreService
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

  clientUpdateEvent(data: UserListDocumentModel) {
    if (data.Id.length === 0) {
      const { Id: _, ...newData } = data;

      newData.DocVersion = '1';

      this.firestoreService
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
        EmailAddress: data.EmailAddress,
        FullName: data.FullName,
        PhoneNo: data.PhoneNo,
        Username: data.Username,
      };

      this.firestoreService
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
