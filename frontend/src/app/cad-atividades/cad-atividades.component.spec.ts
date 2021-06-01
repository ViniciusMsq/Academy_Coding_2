import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAtividadesComponent } from './cad-atividades.component';

describe('CadAtividadesComponent', () => {
  let component: CadAtividadesComponent;
  let fixture: ComponentFixture<CadAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadAtividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
