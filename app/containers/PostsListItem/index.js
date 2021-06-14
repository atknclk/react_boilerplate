import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { makeSelectPosts } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Title from './Title'
import Id from './Id';
import Body from './Body';
import Wrapper from './Wrapper';

export function PostsListItem(props) {
  const { item } = props;
  const content = (
    <Wrapper>
      <Title>{item.name}</Title>
      <p><Body>{item.date}</Body></p>
      <p><Body>{item.week_day}</Body></p>
    </Wrapper>
  );

  return <ListItem item={content} />;
}

PostsListItem.propTypes = {
  item: PropTypes.object,
  posts: PropTypes.string,
};

export default PostsListItem;

// export default connect(
//     createStructuredSelector({
//       posts: makeSelectPosts(),
//     }),
// )(PostsListItem);
