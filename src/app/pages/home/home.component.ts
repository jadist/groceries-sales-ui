import { Component } from '@angular/core';
import { ToolbarInputModel } from '../../components/main/topbar/topbar.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  toolbarInputData: ToolbarInputModel = {
    ToolbarTitle: 'Home Page',
  };
}
