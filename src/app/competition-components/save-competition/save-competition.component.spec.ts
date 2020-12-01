import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCompetitionComponent } from './save-competition.component';

describe('SaveCompetitionComponent', () => {
  let component: SaveCompetitionComponent;
  let fixture: ComponentFixture<SaveCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
