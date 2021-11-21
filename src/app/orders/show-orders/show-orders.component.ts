import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Orders } from 'src/app/models/order-model';
import { OrderService } from 'src/app/services/order.service';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { AddOrdersComponent } from '../add-orders/add-orders.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { EditOrdersComponent } from '../edit-orders/edit-orders.component';
@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
export class ShowOrdersComponent implements OnInit {

  constructor(private service:OrderService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar ) {
      this.service.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshOrdersList();
      })
     }

  listData : MatTableDataSource<any>;
  displayedColoumns : string[] = ['Options','OrderId','OrderDate','CustomerId','ItemId']

  @ViewChild(MatSort) sort:MatSort;

  ngOnInit(): void {
    this.refreshOrdersList();
  }

  refreshOrdersList(){
    this.service.getOrdersList().subscribe(data=>{
      this.listData = new MatTableDataSource(data);
      this.listData.sort=this.sort;
    })
  }

  onEdit(order : Orders){
    this.service.formData=order;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditOrdersComponent,dialogConfig);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete?')){
      this.service.deleteOrder(id).subscribe(res=>{
        this.refreshOrdersList();
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
    this.dialog.open(AddOrdersComponent, dialogConfig)
  }

}
