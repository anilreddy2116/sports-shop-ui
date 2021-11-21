import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';

import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { CustomersComponent } from './customers/customers.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { ShowCustomersComponent } from './customers/show-customers/show-customers.component';
import { EditCustomersComponent } from './customers/edit-customers/edit-customers.component';
import { AddCustomersComponent } from './customers/add-customers/add-customers.component';
import { ShowItemsComponent } from './items/show-items/show-items.component';
import { EditItemsComponent } from './items/edit-items/edit-items.component';
import { AddItemsComponent } from './items/add-items/add-items.component';
import { ShowOrdersComponent } from './orders/show-orders/show-orders.component';
import { EditOrdersComponent } from './orders/edit-orders/edit-orders.component';
import { AddOrdersComponent } from './orders/add-orders/add-orders.component';

import {CustomerService} from 'src/app/services/customer.service';
import {ItemService} from 'src/app/services/item.service';
import {OrderService} from 'src/app/services/order.service';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ShowCustomersComponent,
    EditCustomersComponent,
    AddCustomersComponent,
    ItemsComponent,
    ShowItemsComponent,
    EditItemsComponent,
    AddItemsComponent,
    OrdersComponent,
    ShowOrdersComponent,
    EditOrdersComponent,
    AddOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule, 
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule
    
  ],
  providers: [CustomerService,ItemService,OrderService],
  bootstrap: [AppComponent],
  entryComponents: [AddCustomersComponent,AddItemsComponent,AddOrdersComponent,EditCustomersComponent,EditItemsComponent,EditOrdersComponent]
})
export class AppModule { }
