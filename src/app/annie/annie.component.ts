import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annie',
  templateUrl: './annie.component.html',
  styleUrls: ['./annie.component.css']
})
export class AnnieComponent implements OnInit {

  constructor() { }
  url: String
  ngOnInit() {
    this.url = 'www.baidu.com';
  }

}
