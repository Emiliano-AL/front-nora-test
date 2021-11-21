import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { CustomerService } from '../services/customer/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ShowComponent
  ],
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,
    CustomersRoutingModule
  ],
  providers: [CustomerService]
})
export class CustomersModule { }
