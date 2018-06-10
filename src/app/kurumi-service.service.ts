import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KurumiServiceService {

  userName: String = 'ahri';
  age: number = 15;
  constructor() { }
  ahriSay(){
    console.log('阿狸：我喜欢你！');
  }
}
