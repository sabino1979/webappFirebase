import { Injectable } from '@angular/core';
// importare Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FotoItem } from '../models/foto-item';

@Injectable({
  providedIn: 'root'
})
export class CargarfirebaseService {

  private CARPETA_FIRESTORAGE_IMG = 'img';

  constructor(private db: AngularFirestore) { }

  // creo el metodo para subir las imagenes
  cargar(imgs: FotoItem[]) {
    // creo una istancia a firebase storage
      const storageRef = firebase.storage().ref();

      for (const img of imgs) {
        // cambio lo stado de subido a true
        img.subido = true;
        // creo una condizione en caso del pregresso arriva a 100 o igual;
        if (img.progresso >= 100) {
          continue;
        }

        // creo una costante para saber el stado del processo de subida a firebaseStorage;
        const uploadTask: firebase.storage.UploadTask =
            storageRef.child(`${this.CARPETA_FIRESTORAGE_IMG}/${img.monbreArchivo}`)
              .put( img.archivo);

        uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
            // trasformo el progesso con il callback snapshot de firebase;
            (snapshot) => img.progresso = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
            (error) => console.log('Error en subir ', error),
            () => {
              console.log('imagine cargada');
              uploadTask.snapshot.ref.getDownloadURL().then(urlStorage => {
                img.urlFirestorage = urlStorage;
                img.subido = false;
                this.subirImg({
                  nombre: img.monbreArchivo,
                  url: img.urlFirestorage
                });
              });
            });
      }
  }

  // creo un metodo per cargare a firebase
  private subirImg( img: {nombre: string, url: string}){
    this.db.collection(`/${this.CARPETA_FIRESTORAGE_IMG}`).add(img);
  }
}
