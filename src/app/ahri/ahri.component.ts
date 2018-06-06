import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahri',
  templateUrl: './ahri.component.html',
  styleUrls: ['./ahri.component.css']
})
export class AhriComponent implements OnInit {

  constructor() { 
    console.log('aaaaaaaaa');
  }

  user: any;
  ngOnInit() {
    this.user = {
      username: ''
    }
  }

  clickMe = function(){
    console.log('点击就送');
  }
}
