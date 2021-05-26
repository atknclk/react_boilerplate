import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Button from 'components/Button';
import { loadPost } from '../App/postActions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function postList({ onClickButton, users }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const usersListProps = {
    users,
  };
  return <Button onClick={onClickButton}>Get Post...</Button>;
}

postList.prototypes = {
  onClickButton: PropTypes.func,
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export function mapDispatchToProps(dispatch) {
  return {
    onClickButton: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadPost());
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(postList);
