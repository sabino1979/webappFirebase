import { Injectable } from '@angular/core';
// importare Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

import { FotoItem } from '../models/foto-item';

@Injectable({
  providedIn: 'root'
})
export class CargarfirebaseService {

  private CARPETA_FIRESTORAGE_IMG = 'img';

  constructor(private db: AngularFirestore) {

   }

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
                  url: img.urlFirestorage,
                  nomearchibo: img.monbreArchivo
                });
              });
            });

      }
  }


  delete(img: {nombre: string; uid: string}) {
    const storaref = firebase.storage().ref();
    // cancello dal storage firebase
    storaref.child(`img/${img.nombre}`).delete().then(() => {
      console.log(`${img} eliminato`);
    }).catch(error => console.log(error));
    //  cancello dal database
    this.db.collection(`/${this.CARPETA_FIRESTORAGE_IMG}`).doc(img.uid).delete()
      .then(() => {
        console.log('elemento eliminato');

      });

  }




  setNombre(doc: string, nombre: string) {

    this.db.collection(`/${this.CARPETA_FIRESTORAGE_IMG}`).doc(doc).update({ nombre })
      .then(() => {
        console.log('actualizado');
      }).catch(error => console.log(error));
  }

  // creo un metodo per cargare a firebase
  private subirImg( img: {nombre: string, url: string, nomearchibo: string}) {
    this.db.collection(`/${this.CARPETA_FIRESTORAGE_IMG}`).add(img)
    .then((resp: firebase.firestore.DocumentReference) => {
      //  console.log(resp.id);
      this.db.collection(`/${this.CARPETA_FIRESTORAGE_IMG}`).doc(resp.id)
        .set( { uid: resp.id,
                nombre: img.nombre,
                nombrearchivo: img.nomearchibo,
                url: img.url}).then( (respuesta: any) => console.log(respuesta));
    });

  }
}
