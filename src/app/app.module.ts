import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { FailComponent } from './components/fail/fail.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UpdateComponent } from './components/update/update.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { TodolistComponent } from './todolist/todolist/todolist.component';
import { ViewComponent } from './todolist/layouts/view/view.component';
import { AddComponent } from './todolist/layouts/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    FailComponent,
    ProfilComponent,
    UpdateComponent,
    EnfantComponent,
    TodolistComponent,
    ViewComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
