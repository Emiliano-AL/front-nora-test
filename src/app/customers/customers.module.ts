import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { CustomerService } from '../services/customer/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalsModule } from '../modals/modals.module';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ShowComponent
  ],
  imports: [
    CommonModule, FormsModule,
    ModalsModule,
    ReactiveFormsModule,
    CustomersRoutingModule
  ],
  providers: [CustomerService]
})
export class CustomersModule { }
