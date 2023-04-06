import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '@app/components/sign-up/sign-up.component';
import { HomeComponent } from '@app/components/home/home.component';
import { PageNotFoundComponent } from "@app/components/page-not-found/page-not-found.component"
import { LoginComponent } from '@app/components/login/login.component';
import { AppointmentComponent } from './components/appointment/appointment.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  {path: "home", component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent, data: { title: 'Sign-Up' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'appointment', component: AppointmentComponent, data: { title: 'Book an appointment' } },
  { path: 'appointment/:query', component: AppointmentComponent, data: { title: 'Book an appointment' } },
  { path: '**', component: PageNotFoundComponent } // Error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
