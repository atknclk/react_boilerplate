import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import PostList from 'components/PostList';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
} from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import Form from './Form';
import Input from './Input';
import AtPrefix from './AtPrefix';
import { loadPosts } from '../App/toDoActions';
import { makeSelectId, makeSelectCode } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeId, changeCode } from './actions';

const key = 'posts';

export function toDoList({
  currentid,
  currentcode,
  onSubmitForm,
  onChangeId,
  onChangeCode,
  posts,
  loading,
  error,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if ((currentid && currentid.trim().length > 0) && (currentcode && currentcode.trim().length > 0)) onSubmitForm();
  }, []);

  const postsListProps = {
    loading,
    error,
    posts,
  };
  return (
    <article>
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="currentid">
          <FormattedMessage {...messages.trymeMessage} />
          <AtPrefix>
            <FormattedMessage {...messages.trymeAtPrefix} />
          </AtPrefix>
          <Input
            id="currentcode"
            type="text"
            placeholder="Enter Country Code"
            value={currentcode}
            onChange={(e) => onChangeCode(e)}
          />
          <Input
            id="currentid"
            type="text"
            placeholder="Enter a Year"
            value={currentid}
            onChange={(e) => onChangeId(e)}
          />
        </label>
      </Form>
      <PostList {...postsListProps} />
    </article>
  );
}

toDoList.prototypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  currentid: PropTypes.string,
  currentcode: PropTypes.string,
  onChangeId: PropTypes.func,
  onChangeCode: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  currentid: makeSelectId(),
  currentcode: makeSelectCode(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeId: evt => dispatch(changeId(evt.target.value)),
    onChangeCode: evt => dispatch(changeCode(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadPosts());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(toDoList);
