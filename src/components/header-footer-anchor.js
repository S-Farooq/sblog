import { Link as GatsbyLink } from 'gatsby';
import styled from '@emotion/styled';

export const Link = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.headerTextColor,
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.accentColor,
  },
}));

export const LinkIcon = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.headerTextColor,
  [theme.largeMedia]: {
    fontSize: '40px',
  },
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.accentColor,
  },
}));

export const A = Link.withComponent('a');
export const Aicon = LinkIcon.withComponent('a');

export const HR = styled.div(({ theme }) => ({ 
  width:'100%', 
  height:'1px',
  background: theme.textColor,
  opacity:0.2, 
  margin:15,
}));
