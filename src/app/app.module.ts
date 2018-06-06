import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AhriComponent } from './ahri/ahri.component';
import { FormsModule } from '@angular/forms';
import { AnnieComponent } from './annie/annie.component';
import { ChildComponent } from './child/child.component';
import { DemoComponent } from './demo/demo.component';
import { RouterConfigModule } from './router/router.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({ //装饰器类，描述模块属性的元数据的对象
  declarations: [ 
    AnnieComponent, 
    ChildComponent,
    DemoComponent,
    Child1Component,
    Child2Component,
    AppComponent,
    AhriComponent
    
  ],
  imports: [  //加载其他模块的组件
    BrowserModule, //浏览器访问时必须加载的模块，
    FormsModule, //表单模块
    RouterConfigModule
  ],
  providers: [],  //服务的提供者
  bootstrap: [AppComponent] //指定应用的主视图，只有根模块才有
})
export class AppModule { }
