import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionLogeadoComponent } from './educacion-logeado.component';

describe('EducacionLogeadoComponent', () => {
  let component: EducacionLogeadoComponent;
  let fixture: ComponentFixture<EducacionLogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionLogeadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
