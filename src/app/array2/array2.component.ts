import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array2',
  templateUrl: './array2.component.html',
  styleUrls: ['./array2.component.css']
})
export class Array2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

user:any[]= [
             {"name":"AAA", "mobile":"7878", "city":"Bangalore"},
             {"name":"BBB", "mobile":"778878", "city":"Mumbai"},
             {"name":"CCC", "mobile":"657878", "city":"Delhi"},
             {"name":"DDD", "mobile":"217878", "city":"Kolkata"}
    ]
save(name:string, mobile:number, city:string)
{
 var newuser = {"name":name, "mobile":mobile, "city":city}
 this.user = this.user.concat(newuser);  // to combine array inside array
}

deluser(index:number)
{
  this.user.splice(index,1);  //to remove item from array
  
}
} //class ends here