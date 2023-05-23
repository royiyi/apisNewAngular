import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasTrumpComponent } from './noticias-trump.component';

describe('NoticiasTrumpComponent', () => {
  let component: NoticiasTrumpComponent;
  let fixture: ComponentFixture<NoticiasTrumpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasTrumpComponent]
    });
    fixture = TestBed.createComponent(NoticiasTrumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
