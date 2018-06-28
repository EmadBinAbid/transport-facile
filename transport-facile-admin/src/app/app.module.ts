import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TFAHeaderComponent } from './components/tfa-header/tfa-header.component';
import { TFALandingPageComponent } from './components/tfa-landing-page/tfa-landing-page.component';
import { TFALoginComponent } from './components/tfa-login/tfa-login.component';
import { TFARegisterComponent } from './components/tfa-register/tfa-register.component';
import { TFADashboardComponent } from './components/tfa-dashboard/tfa-dashboard.component';
import { TFAAppComponent } from './components/tfa-app/tfa-app.component';

import { RouteService } from './services/RouteService/route.service';
import { TFAStudentsComponent } from './components/tfa-students/tfa-students.component';
import { TFARoutesComponent } from './components/tfa-routes/tfa-routes.component';
import { TFAServiceTypeComponent } from './components/tfa-service-type/tfa-service-type.component';


const appRoutes: Routes = [
  { path: '', component: TFALandingPageComponent, children: [
    { path: 'login/register', redirectTo: 'register', pathMatch: 'full'},
    { path: 'register/login', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: TFALoginComponent},
    { path: 'register', component: TFARegisterComponent}
  ]},
  { path: 'app', component: TFAAppComponent, children: [
    { path: 'app/dashboard', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'app/routes', redirectTo: 'routes', pathMatch: 'full'},
    { path: 'app/students', redirectTo: 'students', pathMatch: 'full'},
    { path: 'app/serviceType', redirectTo: 'serviceType', pathMatch: 'full'},
    { path: 'dashboard', component: TFADashboardComponent },
    { path: 'routes', component: TFARoutesComponent },
    { path: 'students', component: TFAStudentsComponent },
    { path: 'serviceType', component: TFAServiceTypeComponent }
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
    TFAServiceTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
