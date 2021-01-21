import styled from 'styled-components';
import { COLORS } from '../../../constants/global_styles';

export const Container = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${(props) => props.di};
  flex-direction: ${(prop) => prop.dir};
  flex-wrap: wrap;
  grid-template-rows: 100px, 1fr;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  transform: translate(-50%, -50%);
  transition: border 0.25s ease;
  border: 3px solid ${(props) => (props.color ? props.color : COLORS.light)};
  border-radius: 5px;
  margin: auto;
  padding: 20px;
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  background-color: ${COLORS.shadow};
  color: ${COLORS.accent};

  @media (max-width: 600px) {
    position: initial;
    top: 0;
    left: 0;
    margin: 10px auto;
    width: 80%;
    transform: none;
  }

  @media (max-width: 810px) {
    width: 80%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(prop) => prop.dir};
  flex-wrap: ${(prop) => prop.wrap};
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Audio = styled.div``;

export const Choices = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: ${(prop) => prop.dir};
  flex-wrap: ${(prop) => prop.wrap};
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const Item = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-right: 20px;

  @media (max-width: 600px) {
    padding-right: 0;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 82%;
  height: 100%;
  padding: 10px;
  text-align: center;
`;

export const Button = styled.button`
  grid-column: 1/-1;
  outline: 1px solid transparent;
  margin: 15px 10px;
  border: 0;
  border-radius: 4px;
  padding: ${(props) =>
    props.size === 'small' ? '0.4em 0.5em' : '0.6em 0.7em;'};
  background-color: ${COLORS.light};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${COLORS.shadow};

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${COLORS.accent};
  }

  @media (max-width: 400px) {
    margin: 5px 10px 0 0;
    padding: ${(props) =>
      props.size === 'small' ? '0.2em 0.4em' : '0.3em 0.5em;'};
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    margin: 10px auto;
    padding: ${(props) =>
      props.size === 'small' ? '0.2em 0.4em' : '0.3em 0.5em;'};
    font-size: 1.2rem;
  }
`;

export const PlayButton = styled.button`
  border-style: inset;
  border-width: 20px 0 20px 50px;
  border-color: transparent transparent transparent ${COLORS.shadow};
  width: 0;
  height: 0;
  background-color: ${COLORS.shadow};
  cursor: pointer;

  &:focus {
    outline: solid 1px transparent;
  }

  &:hover {
    border-color: transparent transparent transparent ${COLORS.light};
  }

  @media (max-width: 400px) {
    border-width: 15px 0 15px 35px;
  }

  @media (max-height: 520px) {
    font-size: 1.2rem;
  }
`;

export const Title = styled.h2`
  grid-column: 1 / -1;
  margin: 0 0 15px;
  text-align: center;
  font-size: 3em;

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }

  @media (max-height: 720px) {
    font-size: 1.5rem;
  }
`;

export const Score = styled.h2`
  text-align: center;
`;

export const Count = styled.h3`
  text-align: center;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.1rem;
`;

export const AccentText = styled.span`
  position: relative;
  bottom: 1px;
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  color: ${COLORS.light};

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const VictoryText = styled.p`
  margin: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 1px 15px;
  cursor: pointer;
  font-size: 1.5rem;
  text-align: left;
  color: ${(props) => (props.passed ? COLORS.victory : COLORS.defeat)};

  &:hover {
    color: ${COLORS.accent};
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;
