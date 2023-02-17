import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { SidebarService } from './services/layout/sidebar/sidebar.service';

import { AppService as FirestoreService } from './services/firebase/firestore/app.service';
import { AppService } from './services/model/app.service';

import { ToolbarInputModel } from 'src/app/components/main/topbar/topbar.model';

import { AsTableComponent } from 'src/app/components/content/as-table/as-table.component';
import {
  Column,
  PaginatorModel,
} from 'src/app/components/content/as-table/as-table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  hideSidebar = true;

  detailSidebar = false;

  constructor(
    private sidebar: SidebarService,
    private firestoreService: FirestoreService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.sidebar
      .getHideSidebarLayout()
      .subscribe((val) => (this.hideSidebar = val));
  }

  @ViewChild('myChild') child!: AsTableComponent<any>;

  toolbarInputData: ToolbarInputModel = {} as ToolbarInputModel;

  tableColumns: Array<Column> = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.appService.getChildData().subscribe((item) => {
        // Set Collection To be Read
        this.firestoreService.setServiceIdentity(
          item.PagesIdentity.Firebase.Firestore.RootCollectionName,
          item.Column,
          item.PagesIdentity
        );

        // Column Rendering
        this.tableColumns = item.Column;

        // Change TopBar
        this.toolbarInputData.ToolbarTitle =
          item.PagesIdentity.Component.ToolbarTitle;

        // Get default value
        const defaultPaginator = this.child.getPaginatorValue();

        this.refreshTableData(defaultPaginator);
      });
    });
  }

  async refreshTableData(value: PaginatorModel, searchKeyword: string = '') {
    // Show loading bar
    this.child.showLoadingBar = true;

    if (searchKeyword === '') {
      const [result, rowCount] = await this.firestoreService.getPart(
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
      this.firestoreService
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
    this.firestoreService
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
      const { Id, ...newData } = data;

      this.firestoreService
        .update(Id, newData)
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
