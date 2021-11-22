import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'users', component: UserComponent},
      {path: 'addUser', component: AddUserComponent},

    ]),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
