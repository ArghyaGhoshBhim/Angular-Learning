import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostComponent } from './post.component';

describe('Post component', () => {
  it('Should raise an event when delete post is called', () => {
    const comp = new PostComponent();
    const post: Post = { id: 1, body: 'hhhhhh', title: 'abc' };
    comp.post = post;
    comp.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    comp.onDelete(new MouseEvent('click'));
  });

  describe('Using TestBed', () => {
    let fixture: ComponentFixture<PostComponent>;
    let comp: PostComponent;
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [PostComponent],
        //temporary ignore all the error in the tamplate
        schemas: [NO_ERRORS_SCHEMA],
      });
      fixture = TestBed.createComponent(PostComponent);
      comp = fixture.componentInstance;
    });

    it('should create Post component using testBed', () => {
      expect(comp).toBeDefined();
    });
    it('Should raise an event when delete post is called using testBed', () => {
      const post: Post = { id: 1, body: 'hhhhhh', title: 'abc' };
      comp.post = post;
      comp.delete.pipe(first()).subscribe((selectedPost) => {
        expect(selectedPost).toEqual(post);
      });

      comp.onDelete(new MouseEvent('click'));
    });

    describe('Template using Angular TestBed (ATB) native Element', () => {
      it('should render the post title in the anchor element', () => {
        const post: Post = { id: 1, body: 'body 1', title: 'title 1' };
        comp.post = post;
        fixture.detectChanges();
        let postElement: HTMLElement = fixture.nativeElement;
        const a = postElement.querySelector('a');
        expect(a?.textContent).toContain(post.title);
      });
    });
  });
});
