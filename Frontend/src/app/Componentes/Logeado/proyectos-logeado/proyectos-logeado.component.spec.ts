import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosLogeadoComponent } from './proyectos-logeado.component';

describe('ProyectosLogeadoComponent', () => {
  let component: ProyectosLogeadoComponent;
  let fixture: ComponentFixture<ProyectosLogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosLogeadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
