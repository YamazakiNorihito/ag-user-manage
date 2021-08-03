import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aum-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  title = 'ag-user-manage';
  constructor() { }

  ngOnInit(): void {
  }

}
