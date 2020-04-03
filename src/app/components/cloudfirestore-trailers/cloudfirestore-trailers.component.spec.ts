import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudfirestoreTrailersComponent } from './cloudfirestore-trailers.component';

describe('CloudfirestoreTrailersComponent', () => {
  let component: CloudfirestoreTrailersComponent;
  let fixture: ComponentFixture<CloudfirestoreTrailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudfirestoreTrailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudfirestoreTrailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
