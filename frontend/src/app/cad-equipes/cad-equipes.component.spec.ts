import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEquipesComponent } from './cad-equipes.component';

describe('CadEquipesComponent', () => {
  let component: CadEquipesComponent;
  let fixture: ComponentFixture<CadEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadEquipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
