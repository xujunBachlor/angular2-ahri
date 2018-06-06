import { Child2Component } from './../child2/child2.component';
import { Child1Component } from './../child1/child1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
//routerModule 路由模块   routes 路由数组对象

import { ChildComponent } from "../child/child.component";
import { DemoComponent } from "../demo/demo.component";

//定义路由数组
const config: Routes = [
  { path: 'child', component: ChildComponent,
  children: [{
    path: 'child1', component: Child1Component
  },{
    path: 'child2', component: Child2Component
  }]},
  { path: 'demo', component: DemoComponent},
  { path: '', redirectTo: '/demo', pathMatch: 'full'}//默认跳转
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(config) //根路由的模块
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouterConfigModule { }
