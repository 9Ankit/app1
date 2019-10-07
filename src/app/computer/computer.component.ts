import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btntitle:string = "Update List";

  list:any[] = [
           {"name":"DELL", "Description":"8GB RAM"},
           {"name":"LG", "Description":"8GB RAM"},
           {"name":"Samsung", "Description":"8GB RAM"}
  ];
  Cname:string;
  Description:string;
  
  save() 
  {
   var newitem = {"name":this.Cname, "Description":this.Description};
    this.list = this.list.concat(newitem);  // to add  in existing array
    this.Cname="";
    this.Description="";
    
}
}