import { Component } from '@angular/core'; //ng2核心包

@Component({ //装饰器
  selector: 'app-root',   //组件的标签名称(div标签)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;
  name = '我永远喜欢阿狸';
  currentClass: {};  
  array = ['ahri','annie','akali','kurumi'];
  currentStyle: {};
  constructor(){
    this.title = '我永远喜欢阿妮';
    this.currentClass = {
      //类名称： true/false值
    }
    this.currentStyle = {
      'font-size': '40px'
    }
  }
}
