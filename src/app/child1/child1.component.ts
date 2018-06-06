import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
//加载input可以接收从父组件传过来的值，加载output可以向父组件中传值

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() getName: String;
  @Output() b = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
   
  }

  hello(){
    this.b.emit('我永远喜欢阿妮');
  }
}
