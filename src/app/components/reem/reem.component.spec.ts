import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReemComponent } from './reem.component';

describe('ReemComponent', () => {
  let component: ReemComponent;
  let fixture: ComponentFixture<ReemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
