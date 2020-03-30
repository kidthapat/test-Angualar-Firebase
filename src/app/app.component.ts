import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

export interface Trailer {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'oxygen-not-included-wiki';

  trailers$: Observable<Trailer[]>;
  constructor(
    private db: AngularFireDatabase,
  ) {}
  ngOnInit() {
    this.trailers$ = this.db.list<Trailer>('trailers').valueChanges();
  }
}
