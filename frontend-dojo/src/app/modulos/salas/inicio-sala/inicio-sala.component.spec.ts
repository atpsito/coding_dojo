import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSalaComponent } from './inicio-sala.component';

describe('InicioSalaComponent', () => {
  let component: InicioSalaComponent;
  let fixture: ComponentFixture<InicioSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
