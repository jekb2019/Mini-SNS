const mockPosts = [
  {
    id: '1',
    content: 'How much does it cost to do something like this',
    author: 'Funcky Jack',
  },
  {
    id: '2',
    content: 'I will drill a hole there',
    author: 'Spicy Sam',
  },
  {
    id: '3',
    content: 'Amazing things happens at night',
    author: 'Johnny Deb',
  },
  { id: '4', content: 'Whoooooooooooo?', author: 'Strawberry222' },
];

class PostService {
  constructor(defaultPosts) {
    if (!defaultPosts) {
      this.posts = mockPosts;
    } else {
      this.posts = defaultPosts;
    }
  }

  async getPosts() {
    return this.posts;
  }

  async deletePost(id) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  async addPost(author, content) {
    const post = {
      id: Date.now().toString(),
      content,
      author,
    };
    this.posts = [post, ...this.posts];
    return post;
  }
}

export default PostService;
