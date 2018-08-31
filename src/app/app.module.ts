import {BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {AuthGuardGuard} from './guard/auth-guard.guard';
import {AuthService} from './auth.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {APP_CONFIG, AppConfig} from './common/config/app.config';

import {MyTableComponent} from './my-table/my-table.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LoginComponent} from './login/login.component';
import {AppMaterialModule} from './app-material/app-material.module';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {Configuration} from './app.constants';
import {ApitestComponent} from './apitest/apitest.component';
import {KevolService} from './services/kevol.service';
import {RegisterService} from './localService/register.service';
import {ProgressBarService} from './services/progress-bar.service';
import {TimingInterceptor} from './common/interceptors/timing.interceptor';
import {ProgressInterceptor} from './common/interceptors/progress.interceptor';
import {Login} from './localService/login';
import {AuthInterceptor} from './common/interceptors/auth-interceptor';
import {UserdataService} from './localService/userdata';
import {CalculatorfeeService} from './localService/calculatorfee.service';
import { EdituserComponent } from './Component/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ApitestComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [AuthGuardGuard,
    AuthService, Configuration,
    {provide: APP_CONFIG, useValue: AppConfig},
    ProgressBarService,
    {provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true, deps: [ProgressBarService]},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
   KevolService, RegisterService, Login, UserdataService, CalculatorfeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
