const mockPosts = [
  {
    id: '1',
    content: 'How much does it cost to do something like this',
    author: 'jason123',
  },
  {
    id: '2',
    content: 'I will drill a hole there',
    author: 'jason123',
  },
  {
    id: '3',
    content: 'Amazing things happens at night',
    author: 'jason123',
  },
  { id: '4', content: 'Whoooooooooooo?', author: 'jason123' },
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

  /**
   * it should throw error if deleting post is not successful
   */
  async deletePost(id) {
    this.posts = this.posts.filter((post) => post.id !== id);
    return this.posts;
  }

  /**
   * It should throw error if adding post is not successful
   */
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
