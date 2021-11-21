import { Component, OnInit , ViewChild} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Customers } from 'src/app/models/customer-model';
import { CustomerService } from 'src/app/services/customer.service';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { AddCustomersComponent } from '../add-customers/add-customers.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { EditCustomersComponent } from '../edit-customers/edit-customers.component';


@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {

  constructor(private service:CustomerService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar ) {
      this.service.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshCustomersList();
      })
     }

  listData : MatTableDataSource<any>;
  displayedColoumns : string[] = ['Options','CustomerId','CustomerName','CustomerPhoneNo','CustomerAddress','CustomerEmailId']

  @ViewChild(MatSort) sort:MatSort;

  ngOnInit() {
    this.refreshCustomersList();
  }

  refreshCustomersList(){
    this.service.getCustomersList().subscribe(data=>{
      this.listData = new MatTableDataSource(data);
      this.listData.sort=this.sort;
    })
  }

  onEdit(customer : Customers){
    this.service.formData=customer;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditCustomersComponent,dialogConfig);
  }


  onDelete(id:number){
    if(confirm('Are you sure to delete?')){
      this.service.deleteCustomer(id).subscribe(res=>{
        this.refreshCustomersList();
        this.snackBar.open(res.toString(),'',{
          duration:2000,
          verticalPosition:'top'
        });
      })
    }
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddCustomersComponent, dialogConfig)
  }

}
