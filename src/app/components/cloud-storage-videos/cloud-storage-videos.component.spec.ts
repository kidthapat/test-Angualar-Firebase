import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudStorageVideosComponent } from './cloud-storage-videos.component';

describe('CloudStorageVideosComponent', () => {
  let component: CloudStorageVideosComponent;
  let fixture: ComponentFixture<CloudStorageVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudStorageVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudStorageVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
