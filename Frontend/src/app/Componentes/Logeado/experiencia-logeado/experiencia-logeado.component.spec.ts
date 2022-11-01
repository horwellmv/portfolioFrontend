import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLogeadoComponent } from './experiencia-logeado.component';

describe('ExperienciaLogeadoComponent', () => {
  let component: ExperienciaLogeadoComponent;
  let fixture: ComponentFixture<ExperienciaLogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaLogeadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
