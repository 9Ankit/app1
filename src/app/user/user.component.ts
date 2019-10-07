import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private obj:HttpClient) { }       // object is created

  ngOnInit() {
  }
  
  alluser:any []= [{"name":"zzzzzzz", "mobile":"7879852565"}];
  
  getuser()  {
   
    this.obj.get("./assets/user.json").subscribe(
      response => {
        this.alluser = response as string[];    // convert from json to array
      });
     
  }

}
