import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { fromEvent, merge, Observable } from 'rxjs';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from './../../../shared/utils/generic-form-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];

  form!: FormGroup;
  user!: User;

  validationMessages: ValidationMessages;
  genericValidator!: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.validationMessages = {
      email: { required: 'Email is required', email: 'Email is invalid' },
      password: {
        required: 'Password is required',
        password: 'Password needs to be between 6 and 15 chars',
      },
      confirmPassword: {
        required: 'confirmPassword is required',
        confirmPassword: 'confirmPassword needs to be between 6 and 15 chars',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.form);
      debugger;
    });
  }

  addUser(): void {
    if (this.form.dirty && this.form.valid) {
      this.user = Object.assign({}, this.user, this.form.value);
      this.authService.register(this.user).subscribe({
        next: this.next,
        error: this.error,
      });
    }
  }

  next(response: any) {
    debugger;
  }

  error(fail: any) {
    debugger;
  }
}
