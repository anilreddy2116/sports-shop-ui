import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {

  constructor(public dailogbox:MatDialogRef<EditCustomersComponent>,
    public service:CustomerService,
    private snackBar:MatSnackBar ) { }

  ngOnInit() {
  }

  onClose(){
    this.dailogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.updateCustomer(form.value).subscribe(res=>{
      this.snackBar.open(res.toString(),'',{
        duration:2000,
        verticalPosition:'top'
      })
    })
  }

}
