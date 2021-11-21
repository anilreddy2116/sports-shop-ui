import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {

  constructor(public dailogbox:MatDialogRef<EditItemsComponent>,
    public service:ItemService,
    private snackBar:MatSnackBar) { }

  ngOnInit(){
  }

  onClose(){
    this.dailogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.updateItem(form.value).subscribe(res=>{
      this.snackBar.open(res.toString(),'',{
        duration:2000,
        verticalPosition:'top'
      })
    })
  }


}
