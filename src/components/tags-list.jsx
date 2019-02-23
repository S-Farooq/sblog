import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Small = styled.small({
  opacity:1.0,
  fontSize: '0.9rem',
  textAlign:'center',
  letterSpacing: '-0.02rem',
});

const A = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.accentColor,

  transition: 'color 100ms linear',
  ':hover': {
    textDecoration: 'underline',
    color: theme.textColor,
  },
}));

const CommaSeparatedTags = ({ tags }) => (
  <Small>
    Filed under:
    {' '}
    {tags.split(', ').map((tag, index, array) => (
      <span key={tag}>
        <A to={`/tag/${tag}/`}>{tag}</A>
        {index < array.length - 1 ? ', ' : ''}
      </span>
    ))}
  </Small>
);

CommaSeparatedTags.propTypes = {
  tags: PropTypes.string,
};

CommaSeparatedTags.defaultProps = {
  tags: '',
};

export default CommaSeparatedTags;
