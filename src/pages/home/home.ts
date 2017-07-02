import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {QuizPage} from "../quiz/quiz"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  getQuestions(nos){
    this.navCtrl.push(QuizPage, { nos: nos });
  }

}
