import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'aum-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit ,OnDestroy{

  isCollapsed : boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
