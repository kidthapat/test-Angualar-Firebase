import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cloud-storage-videos',
  templateUrl: './cloud-storage-videos.component.html',
  styleUrls: ['./cloud-storage-videos.component.css']
})
export class CloudStorageVideosComponent implements OnInit {

  uploadPercentageObservable$: Observable<number>;
  constructor(
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
  }

  onFileUpload(files: FileList) {
    const file = files[0]; // get single file
    const path = `videos/${file.name}`;
    this.uploadPercentageObservable$ = this.storage.upload(path, file).percentageChanges();
  }

}
