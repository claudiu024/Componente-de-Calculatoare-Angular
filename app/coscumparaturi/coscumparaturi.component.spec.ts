import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoscumparaturiComponent } from './coscumparaturi.component';

describe('CoscumparaturiComponent', () => {
  let component: CoscumparaturiComponent;
  let fixture: ComponentFixture<CoscumparaturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoscumparaturiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoscumparaturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
