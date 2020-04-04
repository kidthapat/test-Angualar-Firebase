import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import 'firebase/database';
import { ReactiveFormsModule } from '@angular/forms';
import { RealtimedbTrailersComponent } from './components/realtimedb-trailers/realtimedb-trailers.component';
import { RealtimedbTrailersEditComponent } from './components/realtimedb-trailers-edit/realtimedb-trailers-edit.component';
import { CloudfirestoreTrailersComponent } from './components/cloudfirestore-trailers/cloudfirestore-trailers.component';
import { CloudfirestoreTrailersEditComponent } from './components/cloudfirestore-trailers-edit/cloudfirestore-trailers-edit.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import 'firebase/firestore';
import { CloudStorageVideosComponent } from './components/cloud-storage-videos/cloud-storage-videos.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import 'firebase/storage';
@NgModule({
  declarations: [
    AppComponent,
    RealtimedbTrailersComponent,
    RealtimedbTrailersEditComponent,
    CloudfirestoreTrailersComponent,
    CloudfirestoreTrailersEditComponent,
    CloudStorageVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
