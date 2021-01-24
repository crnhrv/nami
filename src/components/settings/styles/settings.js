import styled from 'styled-components';
import { COLORS } from '../../../constants/global_styles';
import { Link as RouterLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

export const Container = styled.section`
  position: fixed;
  top: 50%;
  left: 49.5%;
  transform: translate(-50%, -50%);
  border: 3px solid ${COLORS.light};
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
  max-width: 420px;
  padding: 1em 2em;
  background-color: ${COLORS.shadow};
  color: ${COLORS.accent};

  @media (max-width: 800px) {
    width: 90%;
  }

  @media (max-height: 920px) {
    position: inherit;
    transform: none;
    margin: 0 auto;
    margin-top: 0.75rem;
  }
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  margin: 0.75em 0;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const Tooltip = styled.div`
  display: flex;
  position: relative;
  bottom: 0.2rem;
  gap: 0.3em;
  align-items: baseline;
  margin: 0 0.5em;

  @media (max-width: 300px) {
    font-size: 0.8rem;
    bottom: 0.3rem;
  }
`;

export const TooltipBase = styled(ReactTooltip)``;

export const TooltipLink = styled.span`
  cursor: help;
  color: ${COLORS.light};
  font-size: 1.1rem;

  @media (max-width: 300px) {
    font-size: 0.9rem;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const LabelHead = styled.p`
  margin: 0.4em 0 0.3em 0;
  font-size: 1.4rem;
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
  padding: 1em;
  border: 2px solid #555;
`;

export const Select = styled.select`
  border-radius: 5px;
  width: 100%;
  padding: 0.5em;
  background-color: white;
  font-size: 1.1rem;

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const Option = styled.option``;

export const Submit = styled.button`
  transition: all 0.2s ease;
  border: 0;
  border-radius: 4px;
  padding: 0.3em 0.9em;
  width: 100%;
  cursor: pointer;
  background-color: ${COLORS.light};
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${COLORS.shadow};

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${COLORS.accent};
  }

  @media (max-width: 320px) {
    font-size: 1.3rem;
    padding: 0.2em 0.5em;
  }
`;
