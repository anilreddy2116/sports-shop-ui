import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {

  constructor(public dailogbox:MatDialogRef<AddOrdersComponent>,
    public service:OrderService,
    private snackBar:MatSnackBar
    ) { }

    ngOnInit() {
      this.resetForm();
    }

    resetForm(form?:NgForm){
      if(form!=null)
      form.resetForm();
  
      this.service.formData={
        OrderId:0,
        OrderDate:'',
        CustomerId:0,
        ItemId:0,
    
      }
    }
  

  onClose(){
    this.dailogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.addOrder(form.value).subscribe(res=>{
      this.resetForm(form);
      this.snackBar.open(res.toString(),'',{
        duration:2000,
        verticalPosition:'top'
      });
    })
  }

}
