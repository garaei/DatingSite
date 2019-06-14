import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { CommentsComponent } from './comments/comments.component';
import { DatingInquiryComponent } from './dating-inquiry/dating-inquiry.component';
import { ViewDatingsComponent } from './view-datings/view-datings.component';
import { SendDatingRequestComponent } from './send-dating-request/send-dating-request.component';
import { TermsComponent } from './terms/terms.component';
import { ViewUpdatesComponent } from './view-updates/view-updates.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserService } from 'src/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminviewhelpComponent } from './adminviewhelp/adminviewhelp.component';
import { UserviewhelpResponseComponent } from './userviewhelp-response/userviewhelp-response.component';
import { AdminviewNewsComponent } from './adminview-news/adminview-news.component';
import { UserViewNewsComponent } from './user-view-news/user-view-news.component';
import { AdminviewCommentsComponent } from './adminview-comments/adminview-comments.component';
import { UserViewAllCommentsComponent } from './user-view-all-comments/user-view-all-comments.component';
import { UserViewHisCommentsComponent } from './user-view-his-comments/user-view-his-comments.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NoPageComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    NewsComponent,
    ContactUsComponent,
    AboutUsComponent,
    HelpComponent,
    CommentsComponent,
    DatingInquiryComponent,
    ViewDatingsComponent,
    SendDatingRequestComponent,
    TermsComponent,
    ViewUpdatesComponent,
    NavComponent,
    FooterComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    ForgotpasswordComponent,
    UserAccountComponent,
    AdminviewhelpComponent,
    UserviewhelpResponseComponent,
    AdminviewNewsComponent,
    UserViewNewsComponent,
    AdminviewCommentsComponent,
    UserViewAllCommentsComponent,
    UserViewHisCommentsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
   HttpClientModule,
   ReactiveFormsModule,
   DataTablesModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
