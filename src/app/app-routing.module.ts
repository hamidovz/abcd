import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { VendorTourAddComponent } from './vendor-tour-add/vendor-tour-add.component';
import { InternalToursComponent } from './internal-tours/internal-tours.component';
import { ExternalToursComponent } from './external-tours/external-tours.component';
import { TransferPageComponent } from './transfer-page/transfer-page.component';
import { SingleTourPageComponent } from './single-tour-page/single-tour-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TourAgencyComponent } from './tour-agency/tour-agency.component';
import { UserProfileComponent }  from './user-profile/user-profile.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AttendedToursComponent } from './attended-tours/attended-tours.component';
import { BookedToursComponent } from './booked-tours/booked-tours.component';
import { FavoriteToursComponent } from './favorite-tours/favorite-tours.component';
import { AgencyInformationComponent } from './agency-information/agency-information.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { UserLoginMobileComponent } from './user-login-mobile/user-login-mobile.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorReservationPageComponent } from './vendor-reservation-page/vendor-reservation-page.component';
import { VendorPastToursComponent } from './vendor-past-tours/vendor-past-tours.component';
import { VendorActiveToursComponent } from './vendor-active-tours/vendor-active-tours.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';
import { TestingApiComponent } from './testing-api/testing-api.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home" , component: MainSectionComponent },
  { path: "localTours" , component: InternalToursComponent },
  { path: "externalTours" , component: ExternalToursComponent },
  { path: "transferPage" , component: TransferPageComponent },
  { path: "singleTourPage/:id" , component: SingleTourPageComponent },
  { path: "contactUs" , component: ContactUsComponent },
  { path: "tourAgency" , component: TourAgencyComponent },
  { path: "userProfile" , component: UserProfileComponent },
  { path: "aboutUs" , component: AboutUsPageComponent },
  { path: "userRegistration" , component: UserRegistrationComponent },
  { path: "attendedTours" , component: AttendedToursComponent },
  { path: "bookedTours" , component: BookedToursComponent },
  { path: "favoriteTours" , component: FavoriteToursComponent },
  { path: "agencyInformation" , component: AgencyInformationComponent },
  { path: "vendorLogin" , component: VendorLoginComponent },
  { path: "userLoginMobile" , component: UserLoginMobileComponent },
  { path: "vendorDashboard" , component: VendorDashboardComponent },
  { path: "vendorReservation" , component: VendorReservationPageComponent},
  { path: "vendorPastTours" , component: VendorPastToursComponent},
  { path: "vendorActiveTours" , component: VendorActiveToursComponent},
  { path: "vendorProfile" , component: VendorProfileComponent},
  { path: "vendorTourAdd" , component: VendorTourAddComponent},
  { path: "registrationConfirmation" , component: RegistrationConfirmationComponent },
  { path: "admin" , component: AdminPanelComponent },
  { path: "adminLogin" , component: AdminLoginComponent},
  { path: "apiTest" , component: TestingApiComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
