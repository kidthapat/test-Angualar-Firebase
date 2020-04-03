import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, AbstractControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Trailer } from 'src/app/models/trailer';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realtimedb-trailers',
  templateUrl: './realtimedb-trailers.component.html',
  styleUrls: ['./realtimedb-trailers.component.css']
})
export class RealtimedbTrailersComponent implements OnInit {
  title = 'oxygen-not-included-wiki';
  trailers$: Observable<Trailer[]>;
  form: FormGroup;
  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      url: [''],
    });
    this.trailers$ = this.db.list<Trailer>('trailers').snapshotChanges().pipe(
      map(trailers => trailers.map(t => {
        return {
          ...t.payload.val(),
          id: t.key,
        }
      }))
    );
  }
  onClickedAdd() {
    if (this.form.invalid) { return; }
    const trailer: Trailer = {
      name: this.name.value.trim(),
      url: this.url.value,
    };
    this.db.list('trailers').push(trailer);
    console.log(trailer);
  }
  trustUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get name(): AbstractControl { return this.form.controls.name; }
  get url(): AbstractControl { return this.form.controls.url; }

  onClickedEdit(trailer: Trailer) {
    this.router.navigate([`realtimedb/trailers/${trailer.id}/edit`]);
    // console.log(trailer);
  }

}
