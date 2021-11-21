import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  constructor(public dailogbox:MatDialogRef<AddCustomersComponent>,
    public service:CustomerService,
    private snackBar:MatSnackBar ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData={
      CustomerId:0,
      CustomerName:'',
      CustomerPhoneNo:0,
      CustomerAddress:'',
      CustomerEmailId:''
    }
  }

  onClose(){
    this.dailogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.addCustomer(form.value).subscribe(res=>{
      this.resetForm(form);
      this.snackBar.open(res.toString(),'',{
        duration:2000,
        verticalPosition:'top'
      });
    })
  }

}
