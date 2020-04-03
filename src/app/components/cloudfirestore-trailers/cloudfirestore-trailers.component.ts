import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Trailer } from 'src/app/models/trailer';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-cloudfirestore-trailers',
  templateUrl: './cloudfirestore-trailers.component.html',
  styleUrls: ['./cloudfirestore-trailers.component.css']
})
export class CloudfirestoreTrailersComponent implements OnInit {
  title = 'oxygen-not-included-wiki';
  trailers$: Observable<Trailer[]>;
  form: FormGroup;
  constructor(
    private firestore: AngularFirestore,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      url: [''],
    });
    this.trailers$ = this.firestore.collection<Trailer>('trailers').valueChanges();
  }

  onClickedAdd() {
    if (this.form.invalid) { return; }
    const trailer: Trailer = {
      name: this.name.value.trim(),
      url: this.url.value,
    };
    this.firestore.collection<Trailer>('trailers').add(trailer);
  }
  trustUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get name(): AbstractControl { return this.form.controls.name; }
  get url(): AbstractControl { return this.form.controls.url; }

  onClickedEdit(trailer: Trailer) {
    console.log(trailer);
  }
}
