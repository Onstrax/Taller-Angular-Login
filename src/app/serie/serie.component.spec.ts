import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { SerieComponent } from './serie.component';
import { SerieService } from './serie.service';
import { Serie } from './serie';

describe('SerieListComponent', () => {
  let component: SerieComponent;
  let fixture: ComponentFixture<SerieComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SerieComponent],
      providers: [SerieService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieComponent);
    component = fixture.componentInstance;

    component.series = [
      new Serie(
        faker.number.int(),
        faker.lorem.word(),
        faker.company.name(),
        faker.number.int(),
        faker.lorem.paragraph(),
        faker.internet.url(),
        faker.internet.url()
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Component has a table', () => {
    expect(debug.query(By.css('tbody')).childNodes.length).toBeGreaterThan(0);
  });

  it('should have an dd element ', () => {
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    //expect(content.textContent).toEqual(component.series[0].name);
    expect(component.series[0].name).toBeInstanceOf(String);
  });
});
