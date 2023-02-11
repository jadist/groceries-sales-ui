import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { AsTableComponent } from 'src/app/components/content/as-table/as-table.component';

import {
  Column,
  PaginatorModel,
} from 'src/app/components/content/as-table/as-table.model';
import { ToolbarInputModel } from 'src/app/components/main/topbar/topbar.model';

import {
  ColumnModel,
  IdentityValue,
} from 'src/app/pages/user/user-role/model/user-role.model';
import { UserRoleService } from './service/user-role.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css'],
})
export class UserRoleComponent implements AfterViewInit {
  constructor(private userRoleFs: UserRoleService) {}

  @ViewChild('myChild') child!: AsTableComponent<any>;

  toolbarInputData: ToolbarInputModel = {
    ToolbarTitle: IdentityValue.ToolbarTitle,
  };

  tableColumns: Array<Column> = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Column Rendering
      this.tableColumns = ColumnModel;

      // Get default value
      const defaultPaginator = this.child.getPaginatorValue();

      this.refreshTableData(defaultPaginator);
    });
  }

  async refreshTableData(value: PaginatorModel, searchKeyword: string = '') {
    // Show loading bar
    this.child.showLoadingBar = true;

    if (searchKeyword === '') {
      const [result, rowCount] = await this.userRoleFs.getPart(
        value.CurrentPageIndex,
        value.RowPerPage
      );

      const rows: Array<any> = result.map((item) => ({
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
      this.userRoleFs
        .getPartSearch(searchKeyword)
        .subscribe((result: any[]) => {
          const newObj = result.map((item) => {
            return {
              Id: item.Id,
              ...item.Data,
            };
          });

          const rows: Array<any> = newObj;

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

  //#region Client Output Event
  clientDeleteEvent(Id: string) {
    // Pass the value to This Component's Parent
    this.userRoleFs
      .delete(Id)
      .then(() => {
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

  clientUpdateEvent(data: any) {
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
      const { Id, ...newData } = data;

      this.userRoleFs
        .update(Id, newData)
        .then(() => {
          // Refresh
          this.clientRefreshRequestEvent();
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  }
  //#endregion
}
