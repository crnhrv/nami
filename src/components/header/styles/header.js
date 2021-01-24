import styled from 'styled-components';
import { COLORS } from '../../../constants/global_styles';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  align-items: center;
  gap: 0.6em;
  justify-content: center;
  padding: 0.4em;
  background-color: ${COLORS.shadow};
  border-bottom: 2px solid ${COLORS.dark};
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0 0 0 10px;
  text-align: center;
  font-size: 6.75rem;
  color: #efefef;
  font-family: 'Ma Shan Zheng', cursive;

  @media (max-width: 620px) {
    font-size: 3.15rem;
  }
`;

export const SubTitle = styled.h3`
  margin: 15px 0 0 0;
  text-align: center;
  font-size: 4.7rem;
  color: ${COLORS.light};
  font-family: 'Lobster Two', cursive;
  font-weight: 700;
  font-style: italic;

  @media (max-width: 620px) {
    font-size: 2.15rem;
  }
`;

export const Link = styled(RouterLink)`
  outline: 1px solid transparent;

  &:hover {
    text-decoration: none;
  }
`;
