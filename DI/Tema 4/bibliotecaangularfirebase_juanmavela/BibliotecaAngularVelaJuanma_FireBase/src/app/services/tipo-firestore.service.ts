import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { TipoDto } from '../dto/crear-tipo.dto';

const nodeUrl= 'types'

@Injectable({
  providedIn: 'root'
})
export class TipoFirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  //crear un recurso nuevo
    public create(data: TipoDto){
      return this.firestore.collection(nodeUrl).add(data);
    }

    //obtener un recurso
    public getOne(documentId: string){
      return this.firestore.doc(documentId).snapshotChanges();
    }

    //obtener todos los recursos
    public getAll(){
      return this.firestore.collection(nodeUrl).snapshotChanges();
    }

    //actualizar un recurso
    public update(documentId: string, data: any){
      return this.firestore.collection(nodeUrl).doc(documentId).set(data);
    }

}
