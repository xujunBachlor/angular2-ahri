import { HttpsService } from './../https.service';
import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-annie',
  templateUrl: './annie.component.html',
  styleUrls: ['./annie.component.css']
})
export class AnnieComponent implements OnInit {
  data: {};
  constructor(private serve: HttpsService) { }
  url: String
  ngOnInit() {
    $('p').css('color','yellow');
    this.url = 'www.baidu.com';
    this.serve.getData().subscribe(
      (data) => {
        this.data = data._body;
      }
    );
  }

}
