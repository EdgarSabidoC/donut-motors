import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from '@app/components/nav/nav.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { LoginComponent } from '@app/components/login/login.component';
import { SignUpComponent } from '@app/components/sign-up/sign-up.component';
import { SearchBarComponent } from '@app/components/search-bar/search-bar.component';
import { PageNotFoundComponent } from '@app/components/page-not-found/page-not-found.component';
import { HomeComponent } from '@app/components/home/home.component';
import { AppointmentComponent } from '@app/components/appointment/appointment.component';
import { QuoteACarComponent } from '@app/components/quote-a-car/quote-a-car.component';
import { RegisterACarComponent } from '@app/components/register-a-car/register-a-car.component';
import { CarModelComponent } from '@app/components/car-model/car-model.component';
import { CarMakerComponent } from '@app/components/car-maker/car-maker.component';
import { CarColorComponent } from '@app/components/car-color/car-color.component';
import { CarDealershipComponent } from '@app/components/car-dealership/car-dealership.component';
import { RegisterAModelComponent } from '@app/components/register-a-model/register-a-model.component';
import { RegisterAColorComponent } from '@app/components/register-a-color/register-a-color.component';
import { RegisterAMakerComponent } from '@app/components/register-a-maker/register-a-maker.component';
import { RegisterADealershipComponent } from '@app/components/register-a-dealership/register-a-dealership.component';
import { TimeComponent } from '@app/components/time/time.component';
import { CarCategoryComponent } from '@app/components/car-category/car-category.component';
import { WordSuggesterComponent } from '@app/components/word-suggester/word-suggester.component';

import { CarsForSaleComponent } from '@app/components/cars-for-sale/cars-for-sale.component';
import { SellACarComponent } from '@app/components/sell-a-car/sell-a-car.component';
import { SortFilterComponent } from '@app/components/sort-filter/sort-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    SearchBarComponent,
    PageNotFoundComponent,
    HomeComponent,
    AppointmentComponent,
    QuoteACarComponent,
    RegisterACarComponent,
    CarModelComponent,
    CarMakerComponent,
    CarColorComponent,
    CarDealershipComponent,
    RegisterAModelComponent,
    RegisterAColorComponent,
    RegisterAMakerComponent,
    RegisterADealershipComponent,
    TimeComponent,
    CarCategoryComponent,
    CarsForSaleComponent,
    SellACarComponent,
    WordSuggesterComponent,
    SortFilterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
