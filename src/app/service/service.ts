import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Heroe } from '../models/heroe.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PruebaSrv {

    heroes: Observable<Heroe[]>;
    heroeCollection: AngularFirestoreCollection<Heroe>;
    heroeDoc: AngularFirestoreDocument<Heroe>;

    constructor(public angularFirestore: AngularFirestore) {
        console.log('entra en pruebaSRv');
        this.heroeCollection = angularFirestore.collection('heroes');
        console.log(this.heroeCollection);
        // this.tasks = this.angularFirestore.collection('tasks').valueChanges();
        // this.heroes = this.heroeCollection.valueChanges();
        this.heroes = this.heroeCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Heroe;
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });

        // console.log(`Esto es this.heroes: ${this.asyncPipe.transform(this.heroes)}`);
    }

    getHeroes() {
        return this.heroes;
    }

    addTask(heroe: Heroe) {
        this.heroeCollection.add(heroe);
    }

    deleteHeroe(heroe: Heroe) {
        this.heroeDoc = this.angularFirestore.doc(`tasks/${heroe.id}`);
        this.heroeDoc.delete();
    }

    updateHeroe(heroe: Heroe) {
        this.heroeDoc = this.angularFirestore.doc(`tasks/${heroe.id}`);
        this.heroeDoc.update(heroe);
    }
}
