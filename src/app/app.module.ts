import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelServiceService } from './services/hotel-service.service';
import { MatTableModule } from '@angular/material/table';
import { HotelsComponent } from './hotels/hotels.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './services/auth.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MakeBookingComponent } from './make-booking/make-booking.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    HotelsComponent,
    BookingsComponent,
    SignUpComponent,
    MakeBookingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    GraphQLModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
