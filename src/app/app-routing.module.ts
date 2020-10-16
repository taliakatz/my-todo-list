import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WrapComponent } from './todo-list/wrap/wrap.component';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'todolist', component: WrapComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
