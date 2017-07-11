import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuard } from './authentication/auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AuthenticationModule,
    BrowserModule,
    TodoListModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
