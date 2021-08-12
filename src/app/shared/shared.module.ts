import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TabsModule } from "ngx-bootstrap/tabs";
import { AlertModule } from "ngx-bootstrap/alert";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

@NgModule({
  declarations: [],
  imports: [
    
    BrowserModule,
    FormsModule,

    //TooltipModule.forRoot(),
    //BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule,
    ProgressbarModule,
    PaginationModule,
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    JwBootstrapSwitchNg2Module
  ],
  exports : [
    BrowserModule,
    FormsModule,

    //TooltipModule.forRoot(),
    //BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule,
    ProgressbarModule,
    PaginationModule,
    CollapseModule,
    AlertModule,
    CarouselModule,
    BsDatepickerModule,
    ModalModule,
    JwBootstrapSwitchNg2Module
  ]
})
export class SharedModule { }
