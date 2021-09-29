import React, { memo, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';
import styles from './PostList.module.css';
import Scroller from '../scroller/Scroller';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const scrollDownIcon = <FontAwesomeIcon icon={faArrowDown} />;

const PostList = ({ posts, onDelete }) => {
  const endRef = useRef();
  const scrollToBottom = useCallback(() => {
    endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list} data-testid="postList">
        {posts.map((post) => {
          const { id, content, author } = post;
          return (
            <Post
              key={id}
              id={id}
              content={content}
              createdBy={author}
              onDelete={onDelete}
            />
          );
        })}
        <div ref={endRef}></div>
      </ul>
      <div className={styles.scrollerWrapper}>
        <Scroller scrollHandler={scrollToBottom} icon={scrollDownIcon} />
      </div>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string,
      author: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default memo(PostList);
