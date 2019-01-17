import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CrearRecursoDto } from '../dto/crear-recurso.dto';


const nodeUrl = 'recursos';

@Injectable({
  providedIn: 'root'
})
export class RecursoFirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  //crear un recurso nuevo
    public create(data: CrearRecursoDto){
      return this.firestore.collection(nodeUrl).add(data);
    }

    //obtener un recurso
    public getOne(documentId: string){
      return this.firestore.collection(nodeUrl).doc(documentId).snapshotChanges();
    }

    //obtener todos los recursos
    public getAll(){
      return this.firestore.collection(nodeUrl).snapshotChanges();
    }

    //actualizar un recurso
    public update(recurso: any){
      return this.firestore.collection(nodeUrl).doc(recurso.id).set(recurso.data);
    }

    //elliminar un recurso
    public deleteRecurso(recurso: any){
      return this.firestore.collection(nodeUrl).doc(recurso.id).delete();
    }
}
