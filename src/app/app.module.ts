import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListOfUserComponent } from './list-of-user/list-of-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserServiceService } from './service/user-service.service';

const appRoutes: Routes = [
  {
    path: 'users',
    component: ListOfUserComponent,
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users/addusers',
    component: AddUserComponent,
  },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    ListOfUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
