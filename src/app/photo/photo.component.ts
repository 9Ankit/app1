import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    // this.getphoto();            // to exceute the function on page load
  }

  allphoto:any[] =[{"url":"H.jpg", "title":"Default Photo"}];
  total : number;

  getphoto()
  {
    this.obj.get("./assets/photo.json").subscribe (
      response => {
        this.allphoto = response as string[];
        this.total = this.allphoto.length;
      }
    )
  }


}
