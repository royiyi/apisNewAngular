import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaPaisComponent } from './noticia-pais.component';

describe('NoticiaPaisComponent', () => {
  let component: NoticiaPaisComponent;
  let fixture: ComponentFixture<NoticiaPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaPaisComponent]
    });
    fixture = TestBed.createComponent(NoticiaPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
