import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TodoInputComponent } from './input/todo-input.component';
import { TodoListComponent } from './lists/todo-list.component';
import { WrapComponent } from './wrap/wrap.component';


@NgModule({
  declarations: [
    TodoInputComponent,
    TodoListComponent,
    WrapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class TodoListModule { }
