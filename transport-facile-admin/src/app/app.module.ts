import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TFAHeaderComponent } from './components/tfa-header/tfa-header.component';
import { TFALandingPageComponent } from './components/tfa-landing-page/tfa-landing-page.component';
import { TFALoginComponent } from './components/tfa-login/tfa-login.component';
import { TFARegisterComponent } from './components/tfa-register/tfa-register.component';
import { TFADashboardComponent } from './components/tfa-dashboard/tfa-dashboard.component';
import { TFAAppComponent } from './components/tfa-app/tfa-app.component';

import { TFAStudentsComponent } from './components/tfa-students/tfa-students.component';
import { TFARoutesComponent } from './components/tfa-routes/tfa-routes.component';
import { TFAMenuComponent } from './components/tfa-menu/tfa-menu.component';

import { RouteService } from './services/RouteService/route.service';
import { TFAServiceTypeComponent } from './components/tfa-service-type/tfa-service-type.component';
import { TFANewServiceMessageComponent } from './components/tfa-new-service-message/tfa-new-service-message.component';

const appRoutes: Routes = [
  { path: '', component: TFALandingPageComponent, children: [
    { path: 'login/register', redirectTo: 'register', pathMatch: 'full'},
    { path: 'register/login', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: TFALoginComponent},
    { path: 'register', component: TFARegisterComponent}
  ]},
  { path: 'app', component: TFAAppComponent, children: [
    { path: 'dashboard', component: TFADashboardComponent },
    { path: 'routes', component: TFARoutesComponent },
    { path: 'students', component: TFAStudentsComponent },
    { path: 'serviceType', component: TFAServiceTypeComponent, children: [
      { path: 'newMessage', component: TFANewServiceMessageComponent }
    ] }
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    TFAHeaderComponent,
    TFALandingPageComponent,
    TFALoginComponent,
    TFARegisterComponent,
    TFADashboardComponent,
    TFAAppComponent,
    TFAStudentsComponent,
    TFARoutesComponent,
    TFAServiceTypeComponent,
    TFANewServiceMessageComponent,
    TFAMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
