import { Component, OnInit } from '@angular/core';

// importamos Angular
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Foto {
  nombre: string;
  url: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private itemColection: AngularFirestoreCollection<Foto>;
  fotos: Observable<Foto[]>;
  foto: Foto[];

  // foto = new Array(10).fill('./assets/img/android-chrome-512x512.png');

  constructor(private afs: AngularFirestore) {
    this.itemColection = this.afs.collection<Foto>('img');
    this.fotos = this.itemColection.valueChanges();
   }

  ngOnInit() {
    this.fotos.subscribe(foto => {
      this.foto = foto;
      // console.log(this.foto[0]);

    });




  }

}
