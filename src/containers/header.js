import { Header } from '../components/';

const HeaderContainer = () => {
  return (
    <Header direction="row">
      <Header.SubTitle>Pitch</Header.SubTitle>
      <Header.Link to="/">
        <Header.Title>波</Header.Title>
      </Header.Link>
      <Header.SubTitle>Trainer</Header.SubTitle>
    </Header>
  );
};

export default HeaderContainer;
