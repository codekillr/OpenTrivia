import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Opentrivia provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Opentrivia {

  constructor(public http: Http) {
    console.log('Hello Opentrivia Provider');
  }
  getQuestions(amount){
    let trivia = this.http.get(`https://opentdb.com/api.php?amount=${amount}`);
        return trivia;
  }

}
