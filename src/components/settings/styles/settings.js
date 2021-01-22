import styled from 'styled-components';
import { COLORS } from '../../../constants/global_styles';
import { Link as RouterLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

export const Container = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  border: 3px solid ${COLORS.light};
  border-radius: 5px;
  max-width: 320px;
  padding: 20px;
  background-color: ${COLORS.shadow};
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

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 360px) {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p`
  margin: 10px 0;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const Tooltip = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: baseline;
  margin: 0 5px;
`;

export const TooltipBase = styled(ReactTooltip)``;

export const TooltipLink = styled.span`
  cursor: help;
  color: ${COLORS.light};
  font-size: 1.1rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const LabelHead = styled.p`
  flex-basis: 100%;
  margin: 0 0 10px 0;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
  padding: 10px;
  border: 2px solid #555;
`;

export const Select = styled.select`
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  background-color: white;
  font-size: 1.3rem;

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const Option = styled.option``;

export const Submit = styled.button`
  transition: all 0.2s ease;
  border: 0;
  border-radius: 4px;
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;
  background-color: ${COLORS.light};
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${COLORS.shadow};

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${COLORS.accent};
  }
`;
