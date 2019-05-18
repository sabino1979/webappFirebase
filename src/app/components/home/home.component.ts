import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foto = new Array(10).fill('./assets/img/android-chrome-512x512.png');

  constructor() { }

  ngOnInit() {

    console.log(this.foto);

  }

}
