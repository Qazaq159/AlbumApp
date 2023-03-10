import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosPageComponent } from './album-photos-page.component';

describe('AlbumPhotosPageComponent', () => {
  let component: AlbumPhotosPageComponent;
  let fixture: ComponentFixture<AlbumPhotosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPhotosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
