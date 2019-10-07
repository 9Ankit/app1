import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';  //to use the ngModel we have to add this line.

import {RouterModule, Routes} from '@angular/router'; // to use routing (or page navigation)


import { Ng2SearchPipeModule } from 'ng2-search-filter'; //for search filter

// For data communication use API (to read the data from other source)
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentnameComponent } from './componentname/componentname.component';
import { UserComponent } from './user/user.component';
import { PhotoComponent } from './photo/photo.component';
import { Array1Component } from './array1/array1.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Array2Component } from './array2/array2.component';
import { ItemComponent } from './item/item.component';
import { ComputerComponent } from './computer/computer.component';
import { ExternaljsonComponent } from './externaljson/externaljson.component';
import { DemoComponent } from './demo/demo.component';


 // generate page url
 // http://localhost:4200/dashboard
 // http://localhost:4200         redirect to dashboard (if path is empty)
 // http://localhost:4200/aaaaa      redirect to dashboard (if path has illegal entry)

  const allpage : Routes = [
                       { path:"demo", component: DemoComponent },
                       { path:"dashboard", component: Array1Component },
                       { path:"itemlist", component: ItemComponent },
                       { path:"computer", component: ComputerComponent },
                       { path:"userlist", component: UserComponent },
                       { path:"photolist", component: PhotoComponent },
                       { path:"carlist", component: ExternaljsonComponent },
                       { path:"", redirectTo: "/dashboard", pathMatch:"full" },
                       { path:"", redirectTo: "/dashboard", pathMatch:"full" },
                       { path:"componentname", component: ComponentnameComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    ComponentnameComponent,
    UserComponent,
    PhotoComponent,
    Array1Component,
    HeaderComponent,
    FooterComponent,
    Array2Component,
    ItemComponent,
    ComputerComponent,
    ExternaljsonComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,                      // object created here
    RouterModule.forRoot(allpage),      // object created here
    HttpModule,                          // object created here
    HttpClientModule,                      // object created here
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
