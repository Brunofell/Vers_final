import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarComponent } from './gerenciar.component';

describe('GerenciarComponent', () => {
  let component: GerenciarComponent;
  let fixture: ComponentFixture<GerenciarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciarComponent]
    });
    fixture = TestBed.createComponent(GerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
