import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { SignUpComponent } from '@app/components/sign-up/sign-up.component';
import { HomeComponent } from '@app/components/home/home.component';
import { PageNotFoundComponent } from "@app/components/page-not-found/page-not-found.component"
//import { LoginComponent } from '@app/components/login/login.component';
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
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { TransmissionComponent } from './components/transmission/transmission.component';
import { StateComponent } from './components/state/state.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { PriceComponent } from './components/price/price.component';
import { PostalCodeComponent } from './components/postal-code/postal-code.component';
import { MaintenanceTypeComponent } from './components/maintenance-type/maintenance-type.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { DealershipComponent } from './components/dealership/dealership.component';
import { ColorComponent } from './components/color/color.component';
import { CarModelDbComponent } from './components/car-model-db/car-model-db.component';
import { CarMakerDbComponent } from './components/car-maker-db/car-maker-db.component';
import { CarConditionDbComponent } from './components/car-condition-db/car-condition-db.component';
import { CarCategoryDbComponent } from './components/car-category-db/car-category-db.component';
import { CarDbComponent } from './components/car-db/car-db.component';
import { AppointmentDbComponent } from './components/appointment-db/appointment-db.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  //{ path: 'sign-up', component: SignUpComponent, data: { title: 'Sign-Up' } },
  //{ path: 'login', component: LoginComponent, data: { title: 'Login' } },
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
  { path: 'control-panel', component: ControlPanelComponent, data: { title: 'Buy a car' }, children:
  [
    { path: 'transmission', component: TransmissionComponent, outlet:'dataBaseViews', data: { title: 'Transmission' }},
    { path: 'state', component: StateComponent, outlet:'dataBaseViews', data: { title: 'State' }},
    { path: 'schedule', component: ScheduleComponent, outlet:'dataBaseViews', data: { title: 'Schedule' }},
    { path: 'price', component: PriceComponent, outlet:'dataBaseViews', data: { title: 'Price' }},
    { path: 'postal-code', component: PostalCodeComponent, outlet:'dataBaseViews', data: { title: 'Postal Code' }},
    { path: 'maintenance', component: MaintenanceComponent, outlet:'dataBaseViews', data: { title: 'Maintenance' }},
    { path: 'maintenance-type', component: MaintenanceTypeComponent, outlet:'dataBaseViews', data: { title: 'Maintenance type' }},
    { path: 'dealership', component: DealershipComponent, outlet:'dataBaseViews', data: { title: 'Dealership' }},
    { path: 'color', component: ColorComponent, outlet:'dataBaseViews', data: { title: 'Color' }},
    { path: 'car-db', component: CarDbComponent, outlet:'dataBaseViews', data: { title: 'Car DB' }},
    { path: 'car-model-db', component: CarModelDbComponent, outlet:'dataBaseViews', data: { title: 'Car model DB' }},
    { path: 'car-maker-db', component: CarMakerDbComponent, outlet:'dataBaseViews', data: { title: 'Car maker DB' }},
    { path: 'car-condition-db', component: CarConditionDbComponent, outlet:'dataBaseViews', data: { title: 'Car condition DB' }},
    { path: 'car-category-db', component: CarCategoryDbComponent, outlet:'dataBaseViews', data: { title: 'Car category DB' }},
    { path: 'appointment-db', component: AppointmentDbComponent, outlet:'dataBaseViews', data: { title: 'Appointment' } },
    { path: 'profile', component: ProfileComponent, outlet:'dataBaseViews', data: { title: 'Profile' }},
    { path: 'settings', component: SettingsComponent, outlet:'dataBaseViews', data: { title: 'Settings' } },
    { path: 'reports', component: ReportsComponent, outlet:'dataBaseViews', data: { title: 'Reports' } },
    {
      path: '',        
      redirectTo: 'actual', pathMatch: 'full',
    },
  ]
},
  { path: '**', component: PageNotFoundComponent } // Error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
