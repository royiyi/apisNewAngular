import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasMexicoComponent } from './noticias-mexico.component';

describe('NoticiasMexicoComponent', () => {
  let component: NoticiasMexicoComponent;
  let fixture: ComponentFixture<NoticiasMexicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasMexicoComponent]
    });
    fixture = TestBed.createComponent(NoticiasMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
