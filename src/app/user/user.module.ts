import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { DeleteTodoComponent } from './component/delete-todo/delete-todo.component';
import { UserComponent } from './user.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    AddTodoComponent,
    DeleteTodoComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppRoutingModule
  ]
})
export class UserModule { }
