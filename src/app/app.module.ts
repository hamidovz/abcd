import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AgmCoreModule } from '@agm/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VendorTourAddComponent } from './vendor-tour-add/vendor-tour-add.component';

import { LocalizationComponent } from './dateTimePicker/localization/localization.component';

 
// natiq's components

import { InternalToursComponent } from './internal-tours/internal-tours.component';
import { ExternalToursComponent } from './external-tours/external-tours.component';
import { TransferPageComponent } from './transfer-page/transfer-page.component';
import { TourAgencyComponent } from './tour-agency/tour-agency.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { VendorReservationPageComponent } from './vendor-reservation-page/vendor-reservation-page.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';


// tamerlan's components

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SingleTourPageComponent } from './single-tour-page/single-tour-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AttendedToursComponent } from './attended-tours/attended-tours.component';
import { BookedToursComponent } from './booked-tours/booked-tours.component';
import { FavoriteToursComponent } from './favorite-tours/favorite-tours.component';
import { AgencyInformationComponent } from './agency-information/agency-information.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { UserLoginMobileComponent } from './user-login-mobile/user-login-mobile.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorPastToursComponent } from './vendor-past-tours/vendor-past-tours.component';
import { VendorActiveToursComponent } from './vendor-active-tours/vendor-active-tours.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';
import { TestingApiComponent } from './testing-api/testing-api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    MainSectionComponent,
    ContactUsComponent,
    VendorTourAddComponent,
    InternalToursComponent,
    ExternalToursComponent,
    TransferPageComponent,
    UserProfileComponent,
    SingleTourPageComponent,
    TourAgencyComponent,
    AboutUsPageComponent,
    UserRegistrationComponent,
    AttendedToursComponent,
    BookedToursComponent,
    FavoriteToursComponent,
    AgencyInformationComponent,
    VendorLoginComponent,
    UserLoginMobileComponent,
    VendorDashboardComponent,
    VendorReservationPageComponent,
    VendorPastToursComponent,
    VendorActiveToursComponent,
    VendorProfileComponent,
    RegistrationConfirmationComponent,
    TestingApiComponent,
    AdminPanelComponent,
    AdminLoginComponent,
    LocalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    AngularSvgIconModule,
    HttpClientModule,
    FormsModule,
    NgbDatepickerModule,
    OwlDateTimeModule,  
    OwlNativeDateTimeModule,
    AgmCoreModule.forRoot(
      {
        apiKey: "AIzaSyCE-FU2s6OOzWE2_FkyFBnVdUrk4oZLhrY"
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas,fab,far);
  }
}