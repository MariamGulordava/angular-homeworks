import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component'; 
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' }, 
  { path: 'register', component: RegisterComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  declarations: [
    RegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class AppModule { }
