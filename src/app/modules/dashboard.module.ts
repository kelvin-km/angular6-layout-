import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../Component/dashboard/dashboard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppMaterialModule} from '../app-material/app-material.module';
import {Transactionview} from '../localService/transactionview';
import {PaymentService} from '../localService/payment.service';
import {ApproveService} from '../localService/approve.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  declarations: [DashboardComponent
    ],
  providers: [
    Transactionview, PaymentService, ApproveService
  ],
})
export class DashboardModule { }
