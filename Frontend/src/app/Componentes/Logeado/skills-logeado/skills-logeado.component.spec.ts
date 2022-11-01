import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsLogeadoComponent } from './skills-logeado.component';

describe('SkillsLogeadoComponent', () => {
  let component: SkillsLogeadoComponent;
  let fixture: ComponentFixture<SkillsLogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsLogeadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
