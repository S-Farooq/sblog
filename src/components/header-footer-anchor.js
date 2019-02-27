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
  // display:'inline-block',
  textAlign:'center',
  verticalAlign:'center',
  [theme.largeMedia]: {
    fontSize: '45px',
  },
  [theme.smallMedia]: {
    fontSize: '35px',
  },
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.accentColor,
  },
}));

export const LinkIcon2 = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.headerBgColor,
  [theme.largeMedia]: {
    fontSize: '30px',
  },
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.accentColor,
  },
}));

export const A = Link.withComponent('a');
export const Aicon = LinkIcon.withComponent('a');
export const AiconLink = LinkIcon;
export const Aicon2 = LinkIcon2.withComponent('a');

export const HR = styled.div(({ theme }) => ({ 
  width:'100%', 
  height:'1px',
  background: theme.textColor,
  opacity:0.2, 
  margin:15,
}));

export const AiconLabel = styled.span(({ theme }) => ({
  fontSize: '30%',
  letterSpacing:'-0.02em',
  margin:0,
  padding:0,
  display:'block',
  // verticalAlign:'middle',
  // lineHeight:0,
  // position:'relative',
  // top:'-3.7em',
  // [theme.smallMedia]: {
  //   top:'-0.8em',
  // },
}));
