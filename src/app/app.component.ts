import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sports Store';
  myimage:string="./assets/images/backgroundimage.jpeg"
  customerScreen = false;
  itemsScreen = false;
  ordersScreen = false;
}
