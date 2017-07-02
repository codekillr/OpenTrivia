import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Answer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html'
})
export class AnswerPage {
public answer;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.answer =  navParams.get('answer');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnswerPage');
  }

}
