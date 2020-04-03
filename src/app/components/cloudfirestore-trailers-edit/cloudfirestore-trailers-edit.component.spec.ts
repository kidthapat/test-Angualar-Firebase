import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudfirestoreTrailersEditComponent } from './cloudfirestore-trailers-edit.component';

describe('CloudfirestoreTrailersEditComponent', () => {
  let component: CloudfirestoreTrailersEditComponent;
  let fixture: ComponentFixture<CloudfirestoreTrailersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudfirestoreTrailersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudfirestoreTrailersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
