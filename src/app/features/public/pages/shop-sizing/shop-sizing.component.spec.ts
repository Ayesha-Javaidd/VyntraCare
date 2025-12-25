import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSizingComponent } from './shop-sizing.component';

describe('ShopSizingComponent', () => {
  let component: ShopSizingComponent;
  let fixture: ComponentFixture<ShopSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopSizingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
