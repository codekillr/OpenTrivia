import { AngularTools } from '@angular/platform-browser/src/browser/tools/common_tools';
import { TestResults } from 'reflect-metadata/temp/test/harness';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Opentrivia} from "../../providers/opentrivia";
import {AnswerPage} from "../answer/answer"

/*
  Generated class for the Quiz page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
   providers: [Opentrivia]
})
export class QuizPage {
  public nos;
  public trivia = {results:[]};
  public questions = [];
  public options = [];
  // public answers = [];

  constructor(public opentrivia : Opentrivia, public navCtrl: NavController, public navParams: NavParams) {
      this.nos = navParams.get('nos');

        this.opentrivia.getQuestions(this.nos).subscribe(
          data => {
            this.trivia = data.json();
          },
          err=>console.error(err),
            () => console.log('getQuestions completed')
        );

    for( var i = 0; i<this.nos; i++){
        this.questions[i] = this.trivia.results[i].question; 
        this.options[i] = this.trivia.results[i].incorrect_answers;
        var count = count(this.trivia.results[i].incorrect_answers)
        var rand = rand(0,count);
        this.options[i].splice(rand, 0, this.trivia.results[i].correct_answer);
    }
         
  }
  getAnswer(answer){
  this.navCtrl.push(AnswerPage, { answer : answer  });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

}
