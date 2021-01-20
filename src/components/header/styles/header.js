import styled from 'styled-components';
import { colors } from '../../../global_styles';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 5px;
  background-color: ${colors.shadow};
  border-bottom: 2px solid ${colors.dark};
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0 4px 0 10px;
  color: ${colors.light};
  font-size: 76px;
  text-align: center;
`;

export const SubTitle = styled.h3`
  margin: 15px 0 0 0;
  color: ${colors.accent};
  text-align: center;
  font-size: 36px;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  outline: 1px solid transparent;
`;
