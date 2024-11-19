import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './pages/footer/footer.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CreateconsumerComponent } from './pages/createconsumer/createconsumer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateconsumerComponent } from './pages/updateconsumer/updateconsumer.component';
import { ViewconsumerComponent } from './pages/viewconsumer/viewconsumer.component';
import { ViewconsumerpageComponent } from './pages/viewconsumerpage/viewconsumerpage.component';
import { UpdateconsumerpageComponent } from './pages/updateconsumerpage/updateconsumerpage.component';
import { CreatepropertyComponent } from './pages/createproperty/createproperty.component';
import { ViewpropertyComponent } from './pages/viewproperty/viewproperty.component';
import { ViewpropertypageComponent } from './pages/viewpropertypage/viewpropertypage.component';
import { UpdatepropertyComponent } from './pages/updateproperty/updateproperty.component';
import { UpdatepropertypageComponent } from './pages/updatepropertypage/updatepropertypage.component';
import { CreatepolicyComponent } from './pages/createpolicy/createpolicy.component';
import { IssuepolicyComponent } from './pages/issuepolicy/issuepolicy.component';
import { ViewpolicyComponent } from './pages/viewpolicy/viewpolicy.component';
import { ViewpolicypageComponent } from './pages/viewpolicypage/viewpolicypage.component';
import { ViewquotesComponent } from './pages/viewquotes/viewquotes.component';
//import { UpdateconsumerpageComponent } from './updateconsumerpage/updateconsumerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationComponent,
    CreateconsumerComponent,
    HomepageComponent,
    UpdateconsumerComponent,
    ViewconsumerComponent,
    ViewconsumerpageComponent,
    UpdateconsumerpageComponent,
    CreatepropertyComponent,
    ViewpropertyComponent,
    ViewpropertypageComponent,
    UpdatepropertyComponent,
    UpdatepropertypageComponent,
    CreatepolicyComponent,
    IssuepolicyComponent,
    ViewpolicyComponent,
    ViewpolicypageComponent,
    ViewquotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
