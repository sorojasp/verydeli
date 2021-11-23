import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public form = [
     { val: 'Pepperoni', isChecked: true },
     { val: 'Sausage', isChecked: false },
     { val: 'Mushroom', isChecked: false },
     {val:'Fritanga', isChecked: false}
   ];

  constructor() {}

}
