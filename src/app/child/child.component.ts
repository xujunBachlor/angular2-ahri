import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  name: String;
  age: number;
  personList: any[];
  ngOnInit() {
    this.name = '我永远喜欢小阿狸';
    this.age = 20;
    this.personList = [{
      name: 'annie',
      age: 15
    },{
      name: 'akali',
      age: 25
    },{
      name: 'dianna',
      age: 26
    }];
  }

  fu(e){
    console.log('阿妮：我也喜欢你！'+e);
  }

}
