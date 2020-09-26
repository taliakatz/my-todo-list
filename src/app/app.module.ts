import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from '../app/todo-list/lists/todo-list.component';
import { TodoInputComponent } from '../app/todo-list/input/todo-input.component';
import { WrapComponent } from '../app/todo-list/wrap/wrap.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoInputComponent,
    WrapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
