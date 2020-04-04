import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealtimedbTrailersComponent } from './components/realtimedb-trailers/realtimedb-trailers.component';
import { RealtimedbTrailersEditComponent } from './components/realtimedb-trailers-edit/realtimedb-trailers-edit.component';
import { CloudfirestoreTrailersComponent } from './components/cloudfirestore-trailers/cloudfirestore-trailers.component';
import { CloudfirestoreTrailersEditComponent } from './components/cloudfirestore-trailers-edit/cloudfirestore-trailers-edit.component';
import { CloudStorageVideosComponent } from './components/cloud-storage-videos/cloud-storage-videos.component';

const routes: Routes = [
  { path: 'realtimedb/trailers', component: RealtimedbTrailersComponent },
  { path: 'realtimedb/trailers/:id/edit', component: RealtimedbTrailersEditComponent },
  { path: 'cloudfirestore/trailers', component: CloudfirestoreTrailersComponent },
  { path: 'cloudfirestore/trailers/:id/edit', component: CloudfirestoreTrailersEditComponent },
  { path: 'cloudstorage/videos', component: CloudStorageVideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
