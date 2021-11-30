import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public nameStudent1="Kevin Tovar"
  public styleDiv="padding:5px; background-color: #DBC8C4"
  public icon="bowling-ball-outline";

  public form = [
     { val: 'Pepperoni', isChecked: true },
     { val: 'Sausage', isChecked: false },
     { val: 'Mushroom', isChecked: false },
     {val:'Fritanga', isChecked: false}
   ];

  constructor() {}


  public changeStyle(){
    this.styleDiv=" padding:5px; background-color: #90F2E5";

    if (this.icon=="bowling-ball-outline"){
      this.icon="battery-half-outline";

    }else if(this.icon=="battery-half-outline"){
      this.icon="bowling-ball-outline";

    }






  }

}
