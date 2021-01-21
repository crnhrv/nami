import styled from 'styled-components';
import { COLORS } from '../../../constants/global_styles';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 20px;
  max-width: 720px;
  background-color: ${COLORS.shadow};
  border: 3px solid ${COLORS.light};
  border-radius: 5px;
  color: ${COLORS.accent};

  @media (max-width: 600px) {
    margin-top: 10px;
    width: 80%;
  }

  @media (max-height: 650px) {
    position: inherit;
    transform: none;
    margin-top: 10px;
    max-width: 500px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;

  @media (max-width: 360px) {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 5px 0;
  gap: 7px;
`;

export const Base = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  height: 20px;
  width: 20px;
  border: 2px solid #555;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const LabelHead = styled.p`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 10px;
  flex-basis: 100%;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 1.3rem;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const Option = styled.option``;

export const Submit = styled.button`
  background-color: ${COLORS.light};
  border-radius: 4px;
  font-size: 2rem;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px 20px;
  border: 0;
  width: 100%;
  color: ${COLORS.shadow};
  transition: all 0.2s ease;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${COLORS.accent};
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;
