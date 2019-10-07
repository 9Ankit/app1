import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// <script src="https://kit.fontawesome.com/a076d05399.js"></script>
// import 

 
  


@Component({
  selector: 'app-componentname',
  templateUrl: './componentname.component.html',
  styleUrls: ['./componentname.component.css']
})
export class ComponentnameComponent implements OnInit {

  constructor(
    private obj:HttpClient
  ) { }
 
  // Life : boolean = false;
  // Motorr : boolean = false;
 
  ngOnInit() {
    this.getCar();  
  }
  
  allcar;
  getCar()
  {
    var url = "http://34.73.45.188:4500/api/getPolicy?type=policynumber";       
    //  net required to run this code
    
    this.obj.get(url).subscribe (
      response => {
        this.allcar = response as string[];
      });
  }

  showdata : any[];
  getdata(index:number, index2:number, type:string)
  {
     this.showdata = this.allcar.data[index].policies[index2].coverage;
     console.log(this.showdata);
     console.log(index);
     console.log(index2);
     console.log(type);
  }
  
}
