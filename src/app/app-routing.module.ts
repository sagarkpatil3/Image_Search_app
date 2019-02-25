import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './home/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user/:user', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
