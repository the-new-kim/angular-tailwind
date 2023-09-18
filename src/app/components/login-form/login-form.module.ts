import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../ui/form/form.module';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormModule],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
