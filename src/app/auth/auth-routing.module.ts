import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPassword2Component } from './forgot-password2/forgot-password2.component';
import { ForgotPassword3Component } from './forgot-password3/forgot-password3.component';
import { ForgotPassword4Component } from './forgot-password4/forgot-password4.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot_password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'forgot_password2',
        component: ForgotPassword2Component,
      },
      {
        path: 'forgot_password3',
        component: ForgotPassword3Component,
      },
      {
        path: 'forgot_password4',
        component: ForgotPassword4Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
