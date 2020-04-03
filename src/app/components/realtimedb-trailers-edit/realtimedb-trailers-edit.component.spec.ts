import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimedbTrailersEditComponent } from './realtimedb-trailers-edit.component';

describe('RealtimedbTrailersEditComponent', () => {
  let component: RealtimedbTrailersEditComponent;
  let fixture: ComponentFixture<RealtimedbTrailersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimedbTrailersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimedbTrailersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
