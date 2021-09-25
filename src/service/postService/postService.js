import API from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { listPosts } from '../../graphql/queries';
import {
  createPost as createPostMutation,
  deletePost as deletePostMutation,
} from '../../graphql/mutations';
import { onCreatePost, onDeletePost } from '../../graphql/subscriptions';

class PostService {
  /**
   * Returns sorted (Date) post list fetched from server.
   */
  async fetchPosts() {
    let apiData;
    try {
      apiData = await API.graphql({ query: listPosts });
    } catch (error) {
      throw new Error('Unable to fetch posts.');
    }
    const fetchedPosts = this.processPostListAPIData(apiData);
    return fetchedPosts;
  }

  /**
   * Sorts the posts by created Date (most recent one at the start)
   */
  sortPostsByDate(posts) {
    posts.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }

  /**
   * Sorts the post list api data.
   * Pull out only needed attributes of fetched posts (id, author, content).
   */
  processPostListAPIData(apiData) {
    const items = apiData.data.listPosts.items;
    this.sortPostsByDate(items);

    const fetchedPosts = items.map((item) => {
      const { id, author, content } = item;
      return { id, author, content };
    });
    return fetchedPosts;
  }

  /**
   * Pull out only needed attributes of post api data - (id, author, content).
   */
  processPostAPIData(apiData, query) {
    const { id, author, content } = apiData.data[query];
    return { id, author, content };
  }

  /**
   * it should throw error if deleting post is not successful.
   * If successful, it returns the deleted post.
   */
  async deletePost(id) {
    let apiData;
    try {
      apiData = await API.graphql({
        query: deletePostMutation,
        variables: { input: { id } },
      });
    } catch (error) {
      throw new Error('Unable to delete post.');
    }

    const deletedPost = this.processPostAPIData(apiData, 'deletePost');
    return deletedPost;
  }

  /**
   * It should throw error if adding post is not successful.
   * If successful, it returns the created post.
   */
  async addPost(author, content) {
    let apiData;
    try {
      apiData = await API.graphql({
        query: createPostMutation,
        variables: {
          input: {
            id: Date.now().toString(),
            content,
            author,
          },
        },
      });
    } catch (error) {
      throw error;
    }
    return this.processPostAPIData(apiData, 'createPost');
  }

  subscribeOnCreatePost(callback) {
    const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
      next: (postData) => {
        const apiData = postData.value;
        const newPost = this.processPostAPIData(apiData, 'onCreatePost');
        callback(newPost);
      },
      error: (error) => console.warn(error),
    });
    return subscription;
  }

  subscribeOnDeletePost(callback) {
    const subscription = API.graphql(graphqlOperation(onDeletePost)).subscribe({
      next: (postData) => {
        const apiData = postData.value;
        const deletedPost = this.processPostAPIData(apiData, 'onDeletePost');
        callback(deletedPost);
      },
      error: (error) => console.warn(error),
    });
    return subscription;
  }
}

export default PostService;
