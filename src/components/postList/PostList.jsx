import React, { useRef } from 'react';
import Post from '../post/Post';
import styles from './PostList.module.css';
import PropTypes from 'prop-types';
import Scroller from '../scroller/Scroller';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const PostList = ({ posts, onDelete }) => {
  const endRef = useRef();
  const scrollToBottom = () => {
    endRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDownIcon = <FontAwesomeIcon icon={faArrowDown} />;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
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
      <Scroller scrollHandler={scrollToBottom} icon={scrollDownIcon} />
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostList;
