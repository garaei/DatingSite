import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { NoPageComponent } from './no-page/no-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DatingInquiryComponent } from './dating-inquiry/dating-inquiry.component';
import { ViewDatingsComponent } from './view-datings/view-datings.component';
import { SendDatingRequestComponent } from './send-dating-request/send-dating-request.component';
import { TermsComponent } from './terms/terms.component';
import { ViewUpdatesComponent } from './view-updates/view-updates.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DatingGuardGuard } from './dating-guard.guard';
import { CommentsComponent } from './comments/comments.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { NewsComponent } from './news/news.component';
import { UserViewNewsComponent } from './user-view-news/user-view-news.component';
import { AdminviewCommentsComponent } from './adminview-comments/adminview-comments.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  //{path: 'home', component:HomeComponent,  canActivate: [DatingGuardGuard]},
  //{path: 'index', component:IndexComponent,  canActivate: [DatingGuardGuard]},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'help' , component : HelpComponent},
  {path: 'about' , component : AboutUsComponent },
  {path: 'contact' , component : ContactUsComponent },
  //{path: 'datinginquiry' , component : DatingInquiryComponent,  canActivate: [DatingGuardGuard]},
  {path: 'viewDatings' , component : ViewDatingsComponent},
  //{path: 'sendDatingRequest' , component : SendDatingRequestComponent,  canActivate: [DatingGuardGuard]},
  {path: 'viewUpdates' , component : ViewUpdatesComponent,  canActivate: [DatingGuardGuard]},
  {path: 'terms' , component : TermsComponent},
  //{path: 'userprofile' , component :UserAccountComponent,  canActivate: [DatingGuardGuard]},
  //{path: 'user' , component : UserdashboardComponent,  canActivate: [DatingGuardGuard]},
  {path: 'forgotpassword' , component : ForgotpasswordComponent},
  {path: 'comment' , component : CommentsComponent},
  //{path: 'admin' , component : AdmindashboardComponent, canActivate: [DatingGuardGuard]},
  {path: 'user' , component : UserdashboardComponent},
  {path: 'news' , component : NewsComponent},
  {path: 'admin' , component : AdmindashboardComponent},
  {path: 'home', component:HomeComponent},
  {path: 'userprofile' , component :UserAccountComponent},
  {path: 'datinginquiry' , component : DatingInquiryComponent},
  {path: 'userviewnews' , component : UserViewNewsComponent},
  {path: 'adminViewComments' , component : AdminviewCommentsComponent},

  {path: '**', component: NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
