import { Component, OnInit } from '@angular/core';
import { FotoItem } from 'src/app/models/foto-item';
import { CargarfirebaseService } from 'src/app/services/cargarfirebase.service';



@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {



  fileList: FileList;
  archivos: FotoItem[] = [];
  NuevoItem: FotoItem;
  Select = 'Selezonar Foto';

  constructor( private _cargar: CargarfirebaseService) {  }

  ngOnInit() {
  }

  file(evento: any) {
    // console.log(evento.target.files);
    this.fileList = evento.target.files;
    this.estraerFile(this.fileList);
  }

  // FileList é un objeto con arreglo dobbiamo estrarre il file
  private estraerFile(archivo: FileList) {
  // tslint:disable-next-line: forin
    for (const propried in Object.getOwnPropertyNames(archivo)) {
      const TEMPORALE: File = archivo[propried];
      this.NuevoItem = new FotoItem(TEMPORALE);
      // this.NuevoItem.monbreArchivo = nombre;
      this.Select = this.NuevoItem.monbreArchivo;
      this.archivos.push(this.NuevoItem);
    }
    console.log(this.archivos);
  }

  Enviar() {
    this._cargar.cargar(this.archivos);
  }

}
