import { Http } from '@angular/http'; //包含ajax服务
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {
  private url: string = 'http://localhost:80/index.php';
  constructor(private service: Http) {
    
   }
   getData(): Observable<any>{
    return this.service.get(this.url);
   }

   dataInit(res){
      var body = res.json();
      return body;
   }
   private handlerError(error: any): Observable<any>{
      const errMsg = error.message;
      return Observable.throw(errMsg);
   }
}
