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
  });
});
