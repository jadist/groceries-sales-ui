import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AsTableComponent } from 'src/app/components/content/as-table/as-table.component';

import {
  Column,
  PaginatorModel,
} from 'src/app/components/content/as-table/as-table.model';
import { ToolbarInputModel } from '../../components/main/topbar/topbar.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('myChild') child!: AsTableComponent<Element>;

  toolbarInputData: ToolbarInputModel = {
    ToolbarTitle: 'Home Page',
  };

  tableColumns: Array<Column> = [
    {
      columnDef: 'position',
      header: 'Position',
      cell: (element: Record<string, any>) => `${element['position']}`,
      id: true,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
      url: 'abc',
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: Record<string, any>) => `${element['weight']}`,
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: Record<string, any>) => `${element['symbol']}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: Record<string, any>) => `${element['description']}`,
      richTextString: true,
    },
  ];

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Get default value
      const defaultPaginator = this.child.getPaginatorValue();

      this.refreshTableData(defaultPaginator);
    });
  }

  refreshTableData(value: PaginatorModel) {
    const [result, rowCount] = this.getDataFromServer(value);

    // Update Child Table
    this.child.tableColumns = this.tableColumns;
    this.child.tableData = result;
    this.child.setTableValue();

    // Update Paginator
    this.child.setPaginatorValue({
      CurrentPageIndex: value.CurrentPageIndex,
      RowCount: rowCount,
      RowPerPage: value.RowPerPage,
    });
  }

  getDataFromServer(value: PaginatorModel): [Array<Element>, number] {
    const tmp: Array<Element> = [...DUMMY_DATA];

    const rowCount = tmp.length;

    const startIndex = value.CurrentPageIndex * value.RowPerPage;

    const rowPerPage = value.RowPerPage;

    // Get Data, change below with real method after actual fetching from server
    return [tmp.slice(startIndex, startIndex + rowPerPage), rowCount];
  }
}

export interface Element {
  position: number;
  name: string;
  weight: number;
  symbol: string;
  description?: string;
}

const DUMMY_DATA: Array<Element> = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 11,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 12,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 13,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 14,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 15,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 16,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 17,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 18,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 19,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
  {
    position: 20,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: 'Lorem Ipsum sir amot bla bla bla',
  },
];
