import { Container, Logo, Title, SubTitle, Link } from './styles/header';

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = ({ ...restProps }) => {
  return <Logo src="" alt="" {...restProps} />;
};

Header.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Header.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export default Header;
