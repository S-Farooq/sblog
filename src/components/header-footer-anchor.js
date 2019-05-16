import { Link as GatsbyLink } from 'gatsby';
import styled from '@emotion/styled';

export const Link = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.headerTextColor,
  opacity: "0.5",
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.accentColor,
    opacity: 1.0,
  },
}));

export const LinkIcon = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  // color: theme.headerTextColor,
  opacity: 1.0,
  color: theme.accentColor,
  // display:'inline-block',
  textAlign:'center',
  verticalAlign:'center',
  [theme.largeMedia]: {
    fontSize: '30px',
  },
  [theme.smallMedia]: {
    fontSize: '25px',
  },
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.headerTextColor,
    // opacity: 1.0,
  },
}));

export const LinkIcon2 = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.accentColor,
  opacity: "0.85",
  [theme.largeMedia]: {
    fontSize: '20px',
  },
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.headerTextColor,
    opacity: 1.0,
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
