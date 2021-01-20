import styled from 'styled-components';
import { COLORS } from '../../../constants/global_styles';

export const Container = styled.section`
  display: ${(props) => props.di};
  flex-direction: ${(prop) => prop.dir};
  grid-template-rows: 100px, 1fr;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  flex-wrap: wrap;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 20px;
  max-width: ${(props) => props.maxWidth};
  grid-column-gap: 50px;
  width: 100%;
  transition: all 0.3s ease;

  background-color: ${COLORS.shadow};
  border: 3px solid ${(props) => (props.color ? props.color : COLORS.light)};
  border-radius: 5px;
  color: ${COLORS.accent};

  @media (max-width: 600px) {
    width: 80%;
    margin-top: 10px;
  }

  @media (max-height: 550px) {
    margin-top: 10px;
  }
`;

export const Timer = styled.h1`
  animation: 1.5s infinite linear;
  font-size: 100px;
  color: ${COLORS.light};
  box-sizing: border-box;
  position: fixed;
  height: 30vmin;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Audio = styled.div``;

export const Count = styled.h3`
  text-align: center;
`;

export const Choices = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Score = styled.h2`
  text-align: center;
`;

export const Label = styled.label``;

export const Input = styled.input`
  height: 100%;
  width: 82%;
  padding: 10px;
  text-align: center;
`;

export const PlayButton = styled.button`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 20px 0 20px 50px;
  border-color: transparent transparent transparent ${COLORS.shadow};
  background-color: ${COLORS.shadow};
  border-style: inset;
  cursor: pointer;

  &:focus {
    outline: solid 1px transparent;
  }

  &:hover {
    border-color: transparent transparent transparent ${COLORS.light};
  }
`;

export const Button = styled.button`
  background-color: ${COLORS.light};
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 10px;
  grid-column: 1/-1;
  padding: ${(props) =>
    props.size === 'small' ? '0.4em 0.5em' : '0.6em 0.7em;'};
  border: 0;
  color: ${COLORS.shadow};
  cursor: pointer;
  outline: 1px solid transparent;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${COLORS.accent};
  }

  @media (max-width: 400px) {
    font-size: 1.5em;
  }

  @media (max-width: 320px) {
    font-size: 1.2em;
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

export const Form = styled.form`
  display: flex;
  flex-direction: ${(prop) => prop.dir};
  flex-wrap: ${(prop) => prop.wrap};
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

export const Item = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-right: 20px;
`;

export const Title = styled.h2`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 3em;
  margin: 0 0 15px;

  @media (max-width: 400px) {
    font-size: 2em;
  }

  @media (max-width: 320px) {
    font-size: 1.8em;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  text-align: center;
`;

export const AccentText = styled.p`
  color: ${COLORS.light};
  font-size: 1.3em;
  margin: 0;
  padding: 0;

  @media (max-width: 400px) {
    font-size: 1.2em;
  }

  @media (max-width: 320px) {
    font-size: 1em;
  }
`;

export const VictoryText = styled.p`
  margin: 0;
  font-size: 1.5em;
  text-align: left;
  padding: 0;
  width: auto;
  color: ${(props) => (props.passed ? COLORS.victory : COLORS.defeat)};

  @media (max-width: 400px) {
    font-size: 1.2em;
  }
  @media (max-width: 320px) {
    font-size: 1em;
  }
`;
