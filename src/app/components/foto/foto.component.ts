import { Component, OnInit, ElementRef } from '@angular/core';
// importamos FireBase
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CargarfirebaseService } from 'src/app/services/cargarfirebase.service';
import { FotoItem } from 'src/app/models/foto-item';
import { FormControl } from '@angular/forms';

// creamos interface Foto
export interface Foto {
  nombre: string;
  url: string;
  uid: string;
  nombrearchivo: string;
}

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  itemactualizar: Foto;
  private itemColection: AngularFirestoreCollection<Foto>;
  fotos: Observable<Foto[]>;
  nombre: FormControl;



  constructor( private afs: AngularFirestore,
               private _service: CargarfirebaseService,
              ) {
              }

  ngOnInit() {
    this.itemColection = this.afs.collection<Foto>('img');
    this.fotos = this.itemColection.valueChanges();

  }
  delete(item: Foto) {
    this._service.delete({nombre: item.nombrearchivo, uid: item.uid});
  }
  formulario(forma: FormControl, item: Foto) {
    this._service.setNombre(item.uid, forma.value.nombre);
  }

  // prova(item: Foto) {
  //     // console.log(item);
  //     this.itemactualizar = item;

  //     console.log(this.itemactualizar);

  //     // this._service.delete(item);
  //     // this._service.setUid(item.uid);
  //   // this._service.delete({nombre: foto.textContent});


  // }

}
