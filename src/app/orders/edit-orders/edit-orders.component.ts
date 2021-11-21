import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {

  constructor(public dailogbox:MatDialogRef<EditOrdersComponent>,
    public service:OrderService,
    private snackBar:MatSnackBar ) { }

  ngOnInit(){
  }

  onClose(){
    this.dailogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.updateOrder(form.value).subscribe(res=>{
      this.snackBar.open(res.toString(),'',{
        duration:2000,
        verticalPosition:'top'
      })
    })
  }

}
