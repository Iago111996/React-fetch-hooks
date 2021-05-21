import React from 'react';

import P from 'prop-types';

import './styles.css';

const PostCard = ({
  title, body, cover, id,
}) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="posts-content">
      <h1>
        {title}
        {' '}
        {id}
      </h1>
      <p>{body}</p>
    </div>
  </div>
);

export default PostCard;

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
  id: P.number.isRequired,
};
