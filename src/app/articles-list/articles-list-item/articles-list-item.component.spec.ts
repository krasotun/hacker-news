import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListItemComponent } from './articles-list-item.component';

describe('ArticleComponent', () => {
  let component: ArticlesListItemComponent;
  let fixture: ComponentFixture<ArticlesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
