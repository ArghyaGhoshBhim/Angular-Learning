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
});
