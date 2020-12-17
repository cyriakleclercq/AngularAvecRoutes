import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FailComponent } from './components/fail/fail.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { TodolistComponent } from './todolist/todolist/todolist.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "todo", component: TodolistComponent },
  {
    path: "users", component: UsersComponent,
    children: [
      {
        path: "profil", component: ProfilComponent,
        children: [
          { path: "update", component: UpdateComponent }
        ]
      }
    ]
  },
  { path: "user", component: UserComponent },
  { path: "404", component: FailComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
