import { Component, OnDestroy, OnInit } from '@angular/core';

import { PropertyModel as SidebarModel } from '../../../model/root/sidebar/property';

@Component({
  selector: 'app-sidebar-title-only',
  templateUrl: './title-only.component.html',
  styleUrls: ['./title-only.component.css'],
})
export class TitleOnlyComponent implements OnInit, OnDestroy {
  // This default data SHOULD BE REPLACED from subscriptions
  sidebarData: SidebarModel = {
    version: {
      '1': '1',
    },
    title: 'Shoes',
    description: 'List of shoes types',
    urlParamName: 'shoes',
    data: [
      {
        sub_title: 'Boots',
        sub_desc: 'Boots',
        urlParamValue: "1",
      },
      {
        sub_title: 'Clogs',
        sub_desc: 'Clogs',
        urlParamValue: "2",
      },
      {
        sub_title: 'Loafers',
        sub_desc: 'Loafers',
        urlParamValue: "3",
      },
      {
        sub_title: 'Moccasins',
        sub_desc: 'Moccasins',
        urlParamValue: "4",
      },
      {
        sub_title: 'Sneakers',
        sub_desc: 'Sneakers',
        urlParamValue: "5",
      },
    ],
  };

  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
