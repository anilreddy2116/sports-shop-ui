import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  constructor(public dailogbox:MatDialogRef<AddItemsComponent>,
    public service:ItemService,
    private snackBar:MatSnackBar
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
  
    this.service.formData={
      ItemId:0,
      ItemName:'',
      ItemPrice:0,
      ItemColor:'',
      ItemSize:0
    }
  }

  onClose(){
    this.dailogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.addItem(form.value).subscribe(res=>{
      this.resetForm(form);
      this.snackBar.open(res.toString(),'',{
        duration:2000,
        verticalPosition:'top'
      });
    })
  }

}
