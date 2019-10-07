import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btntitle:string = "Save Item";
  item:any[] = [
         {"Name":"Apple", "Cost":200, "qty":5},
         {"Name":"Grapes", "Cost":200, "qty":5},
         {"Name":"Banana", "Cost":200, "qty":15},
         {"Name":"Orange", "Cost":200, "qty":20}
  ];

  pname:string;
  price:string;
  qty:string;

  save() 
  {
   var newitem = {"Name":this.pname, "Cost":this.price, "qty":this.qty};
    this.item = this.item.concat(newitem);  // to add  in existing array
    this.pname="";
    this.price="";
    this.qty="";
  }
}
