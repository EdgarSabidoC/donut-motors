import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { QuoteACarComponent } from './components/quote-a-car/quote-a-car.component';
import { RegisterACarComponent } from './components/register-a-car/register-a-car.component';
import { CarModelComponent } from './components/car-model/car-model.component';
import { CarMakerComponent } from './components/car-maker/car-maker.component';
import { CarColorComponent } from './components/car-color/car-color.component';
import { CarDealershipComponent } from './components/car-dealership/car-dealership.component';
import { RegisterAModelComponent } from './components/register-a-model/register-a-model.component';
import { RegisterAColorComponent } from './components/register-a-color/register-a-color.component';
import { RegisterAMakerComponent } from './components/register-a-maker/register-a-maker.component';
import { RegisterADealershipComponent } from './components/register-a-dealership/register-a-dealership.component';
import { TimeComponent } from './components/time/time.component';
import { CarCategoryComponent } from './components/car-category/car-category.component';
import { WordSuggesterComponent } from './components/word-suggester/word-suggester.component';
import { CarsForSaleComponent } from './components/cars-for-sale/cars-for-sale.component';
import { SellACarComponent } from './components/sell-a-car/sell-a-car.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { BuyACarComponent } from './components/buy-a-car/buy-a-car.component';
import { SortFilterComponent } from '@app/components/sort-filter/sort-filter.component';
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
import { RegisterATransmissionComponent } from './components/register-a-transmission/register-a-transmission.component';
import { RegisterAPostalCodeComponent } from './components/register-a-postal-code/register-a-postal-code.component';
import { RegisterAStateComponent } from './components/register-a-state/register-a-state.component';
import { AuthGuard } from '@app/guards/auth.guard';
import { AuthService } from '@app/services/auth.service';

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
    ContactComponent,
    AboutComponent,
    FaqComponent,
    BuyACarComponent,
    SortFilterComponent,
    ControlPanelComponent,
    TransmissionComponent,
    StateComponent,
    ScheduleComponent,
    PriceComponent,
    PostalCodeComponent,
    MaintenanceTypeComponent,
    MaintenanceComponent,
    DealershipComponent,
    ColorComponent,
    CarModelDbComponent,
    CarMakerDbComponent,
    CarConditionDbComponent,
    CarCategoryDbComponent,
    CarDbComponent,
    AppointmentDbComponent,
    RegisterATransmissionComponent,
    RegisterAPostalCodeComponent,
    RegisterAStateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
