import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array1',
  templateUrl: './array1.component.html',
  styleUrls: ['./array1.component.css']
})
export class Array1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// total:number=0;
allitem:any[]= ["Apple", "Mango"];
total:number = this.allitem.length;

saveitem(itemname:string)  
{
  this.allitem.push(itemname);
  this.total = this.allitem.length;
}

deleteitem(index:number)
{
  this.allitem.splice(index,1);  //to remove item from array
  this.total = this.allitem.length;
}

proname:string;
product:any[]=[];
msg:string;

saveproduct()
{
  // alert(this.proname);
  this.product.push(this.proname);
  this.proname="";
  this.msg = "product Added Succesafully .!";
}
}
