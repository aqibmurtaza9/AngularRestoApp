import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterestoComponent } from './updateresto.component';

describe('UpdaterestoComponent', () => {
  let component: UpdaterestoComponent;
  let fixture: ComponentFixture<UpdaterestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
