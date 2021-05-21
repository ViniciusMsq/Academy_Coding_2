import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadRecursosComponent } from './cad-recursos.component';

describe('CadRecursosComponent', () => {
  let component: CadRecursosComponent;
  let fixture: ComponentFixture<CadRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadRecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
