import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookUpdateComponent } from './components/book-update/book-update.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},

  {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent},

  {path: 'book-list', component: BookListComponent},
  {path: 'book-create', component: BookCreateComponent},
  {path: 'book-update/:id', component: BookUpdateComponent},
  {path: 'book-delete/:id', component: BookDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
