import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogeadoComponent } from './navbar-logeado.component';

describe('NavbarLogeadoComponent', () => {
  let component: NavbarLogeadoComponent;
  let fixture: ComponentFixture<NavbarLogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLogeadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
