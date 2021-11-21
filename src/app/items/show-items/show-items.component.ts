import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Items } from 'src/app/models/item-model';
import { ItemService } from 'src/app/services/item.service';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { AddItemsComponent } from '../add-items/add-items.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { EditItemsComponent } from '../edit-items/edit-items.component';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {

  constructor(private service:ItemService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar ) {
      this.service.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshItemsList();
      })
     }

  listData : MatTableDataSource<any>;
  displayedColoumns : string[] = ['Options','ItemId','ItemName','ItemPrice','ItemColor','ItemSize']

  @ViewChild(MatSort) sort:MatSort;

  ngOnInit(): void {
    this.refreshItemsList();
  }

  refreshItemsList(){
    this.service.getItemsList().subscribe(data=>{
      this.listData = new MatTableDataSource(data);
      this.listData.sort=this.sort;
    })
  }

  onEdit(item : Items){
    this.service.formData=item;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditItemsComponent,dialogConfig);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete?')){
      this.service.deleteItem(id).subscribe(res=>{
        this.refreshItemsList();
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
    this.dialog.open( AddItemsComponent, dialogConfig)
  }

}
