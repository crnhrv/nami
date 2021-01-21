import styled from 'styled-components';
import { COLORS } from '../../../constants/global_styles';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 5px;
  background-color: ${COLORS.shadow};
  border-bottom: 2px solid ${COLORS.dark};
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0 4px 0 10px;
  text-align: center;
  font-size: 4.75rem;
  color: ${COLORS.light};

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media (max-height: 550px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h3`
  margin: 15px 0 0 0;
  text-align: center;
  font-size: 2.25rem;
  color: ${COLORS.accent};

  @media (max-width: 600px) {
    font-size: 1.55rem;
  }

  @media (max-height: 400px) {
    font-size: 1.55rem;
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  outline: 1px solid transparent;
`;
