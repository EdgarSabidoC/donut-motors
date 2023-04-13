import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '@app/components/sign-up/sign-up.component';
import { HomeComponent } from '@app/components/home/home.component';
import { PageNotFoundComponent } from "@app/components/page-not-found/page-not-found.component"
import { LoginComponent } from '@app/components/login/login.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { QuoteACarComponent } from './components/quote-a-car/quote-a-car.component';
import { RegisterACarComponent } from './components/register-a-car/register-a-car.component';
import { RegisterAColorComponent } from './components/register-a-color/register-a-color.component';
import { RegisterADealershipComponent } from './components/register-a-dealership/register-a-dealership.component';
import { RegisterAMakerComponent } from './components/register-a-maker/register-a-maker.component';
import { RegisterAModelComponent } from './components/register-a-model/register-a-model.component';
import { CarsForSaleComponent } from './components/cars-for-sale/cars-for-sale.component';
import { SellACarComponent } from './components/sell-a-car/sell-a-car.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { BuyACarComponent } from './components/buy-a-car/buy-a-car.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent, data: { title: 'Sign-Up' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'appointment', component: AppointmentComponent, data: { title: 'Book an appointment' } },
  { path: 'quote-a-car', component: QuoteACarComponent, data: { title: 'Quote a car' } },
  { path: 'register-a-car', component: RegisterACarComponent, data: { title: 'Register a car' } },
  { path: 'register-a-color', component: RegisterAColorComponent, data: { title: 'Register a color' } },
  { path: 'register-a-dealership', component: RegisterADealershipComponent, data: { title: 'Register a dealership' } },
  { path: 'register-a-maker', component: RegisterAMakerComponent, data: { title: 'Register a maker' } },
  { path: 'register-a-model', component: RegisterAModelComponent, data: { title: 'Register a model' } },
  { path: 'cars-for-sale', component: CarsForSaleComponent, data: { title: 'Cars for sale' } },
  { path: 'sell-a-car', component: SellACarComponent, data: { title: 'Sell a car' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'faq', component: FaqComponent, data: { title: 'Faq' } },
  { path: 'buy-a-car', component: BuyACarComponent, data: { title: 'Buy a car' } },
  { path: '**', component: PageNotFoundComponent } // Error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
