import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/commom/http';
import { HttpClient } from '@angular/common/http';
import { getCreationMode } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-externaljson',
  templateUrl: './externaljson.component.html',
  styleUrls: ['./externaljson.component.css']
})
export class ExternaljsonComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getCar();     // to call the function on page load
  }

  total:number;
  allcar:string[]=[];

  getCar()
  {
    var url = "http://34.73.45.188:4500/api/getPolicy?type=policynumber";       
    //  net required to run this code
    
    this.obj.get(url).subscribe (
      response => {
        this.allcar = response as string[];
        this.total = this.allcar.length;
      }
    ) ;
  }
}

//  this url will only run in firefox bcoz we have to add an extension called 'cors everywhere' which runs only in firefox. 
//  total called in html part