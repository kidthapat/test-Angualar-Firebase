import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimedbTrailersComponent } from './realtimedb-trailers.component';

describe('RealtimedbTrailersComponent', () => {
  let component: RealtimedbTrailersComponent;
  let fixture: ComponentFixture<RealtimedbTrailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimedbTrailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimedbTrailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
