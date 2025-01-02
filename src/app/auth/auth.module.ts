import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { ForgotPassword2Component } from './forgot-password2/forgot-password2.component';
import { ForgotPassword3Component } from './forgot-password3/forgot-password3.component';
import { ForgotPassword4Component } from './forgot-password4/forgot-password4.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '@project/services/api.service';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AuthHeaderComponent,
    ForgotPassword2Component,
    ForgotPassword3Component,
    ForgotPassword4Component,
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule, HttpClientModule],
  exports: [AuthHeaderComponent, RegisterComponent, HttpClientModule],
  providers:[ApiService]
})
export class AuthModule {}
