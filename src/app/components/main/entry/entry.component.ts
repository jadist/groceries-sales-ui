import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

import { ButtonClickModel, ComponentEntryInputModel } from './entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  @Input() ComponentConfig: ComponentEntryInputModel | undefined;
  @Output() ButtonClick = new EventEmitter<ButtonClickModel>();

  emailFormControl = new FormControl();
  passwordFormControl = new FormControl();

  onButtonClick() {
    const value: ButtonClickModel = {
      Email: this.emailFormControl.value,
      Password: this.passwordFormControl.value,
    };

    this.ButtonClick.emit(value);
  }
}
