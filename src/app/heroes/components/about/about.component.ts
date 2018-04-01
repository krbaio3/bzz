import { Component, OnInit } from '@angular/core';
import { PruebaSrv } from '../../../service/service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [PruebaSrv]
})
export class AboutComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private angularFirestore: AngularFirestore) {
    console.log('entra');
    this.items = angularFirestore.collection('heroes').valueChanges();
    console.log(this.items);
  }

  ngOnInit() {
  }

}
