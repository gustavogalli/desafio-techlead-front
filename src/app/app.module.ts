import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BookListComponent } from './components/book-list/book-list.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookUpdateComponent } from './components/book-update/book-update.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BookLendingComponent } from './components/book-lending/book-lending.component';
import { LoanManagementComponent } from './components/loan-management/loan-management.component';
import { LoanApproveComponent } from './components/loan-approve/loan-approve.component';
import { LoanReturnComponent } from './components/loan-return/loan-return.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    HeaderComponent,
    HomeComponent,
    BookLendingComponent,
    LoanManagementComponent,
    LoanApproveComponent,
    LoanReturnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }