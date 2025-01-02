import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorListComponent } from './categor-list.component';

describe('CategorListComponent', () => {
  let component: CategorListComponent;
  let fixture: ComponentFixture<CategorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
