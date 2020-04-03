import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Trailer } from 'src/app/models/trailer';

@Component({
  selector: 'app-realtimedb-trailers-edit',
  templateUrl: './realtimedb-trailers-edit.component.html',
  styleUrls: ['./realtimedb-trailers-edit.component.css']
})
export class RealtimedbTrailersEditComponent implements OnInit {

  form: FormGroup;
  private trailerId: string;

  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      url: ['']
    });
    this.route.paramMap.pipe(
      switchMap(params => {
        this.trailerId = params.get('id');
        return this.db.object(`trailers/${this.trailerId}`).valueChanges();
      })
    ).subscribe((trailer: Trailer) => {
      this.name.setValue(trailer.name);
      this.url.setValue(trailer.url);
    });
  }
  get name(): AbstractControl { return this.form.controls.name; }
  get url(): AbstractControl { return this.form.controls.url; }
  onClickedSave() {
    const ref = this.db.object(`trailers/${this.trailerId}`);
    ref.set({
      name: this.name.value,
      url: this.url.value,
    });

  }
  onClickedDelete() {
    const ref = this.db.object(`trailers/${this.trailerId}`);
    ref.remove().then(()=>{
      this.router.navigate(['realtimedb/trailers']);
    });
  }


}
