import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profession = 'programista';
  skill = 'Angular';


  title = 'angular-kursik';
  inputText = 'Tekst';
  maxLengt = 5;
  colorClass = 'color';
  logUrl = '';

  isDisable = true;

  constructor() {

  }

  change() {
    this.inputText = 'Zmiana tekstu i koloru';
    this.maxLengt = 10;
    this.colorClass = 'color2';
    this.logUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  onFocus(){
    this.colorClass = 'color2';
  }

  onClick(event){
    console.log(event);
  }

  onMouseMove(event) {
    console.log('x: ' + event.clientX + ' , y: ' + event.clientY);
  }

  onPaste()  {
    this.inputText = 'Nie wklejaj, wpisz!';
  }

  change2() {
    this.isDisable = false;
  }

  saveP(event) {
    this.profession = event.target.value;
  }

  saveS(event){
    this.skill = event.target.value;
  }

}
