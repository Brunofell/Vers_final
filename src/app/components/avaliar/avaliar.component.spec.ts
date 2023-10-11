import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarComponent } from './avaliar.component';

describe('AvaliarComponent', () => {
  let component: AvaliarComponent;
  let fixture: ComponentFixture<AvaliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliarComponent]
    });
    fixture = TestBed.createComponent(AvaliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
