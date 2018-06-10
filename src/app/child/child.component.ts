import { KurumiServiceService } from './../kurumi-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
//初始化服务的对象，服务是一个单例对象，整个项目只会提供一个服务对象

  constructor(private kurumi: KurumiServiceService) { 
    kurumi.ahriSay();
  }

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
