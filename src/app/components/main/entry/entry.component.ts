import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { ComponentEntryInputModel, ButtonClickModel } from './entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  @Input() ComponentConfig: ComponentEntryInputModel | undefined;
  @Output() ButtonClick = new EventEmitter<ButtonClickModel>();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl();

  matcher = new MyErrorStateMatcher();

  onButtonClick() {
    const value: ButtonClickModel = {
      Email: this.emailFormControl.value,
      Password: this.passwordFormControl.value,
    };

    this.ButtonClick.emit(value);
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
