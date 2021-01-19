import styled from 'styled-components';
import { colors } from '../../../global_styles';

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

  background-color: ${colors.shadow};
  border: 3px solid ${colors.light};
  border-radius: 5px;
  color: ${colors.accent};

  @media (max-width: 800px) {
    position: inherit;
    transform: none;
    width: 60%;
    margin-top: 10px;
  }

  @media (max-height: 950px) {
    position: inherit;
    transform: none;
    margin-top: 10px;
  }
`;

export const Timer = styled.h1`
  animation: 1.5s infinite linear;
  font-size: 100px;
  color: ${colors.light};
  box-sizing: border-box;
  position: fixed;
  height: 30vmin;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Audio = styled.div``;

export const Submit = styled.button``;

export const Count = styled.h3`
  text-align: center;
`;

export const Choices = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
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
  border-color: transparent transparent transparent ${colors.shadow};
  background-color: ${colors.shadow};
  border-style: inset;
  cursor: pointer;

  &:focus {
    outline: solid 1px transparent;
  }

  &:hover {
    border-color: transparent transparent transparent ${colors.light};
  }
`;

export const Button = styled.button`
  background-color: ${colors.light};
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 25px 10px;
  place-self: center;
  grid-column: 1/-1;
  padding: 10px 20px;
  border: 0;
  color: ${colors.shadow};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${colors.accent};
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

export const VictoryText = styled.p`
  margin: 0;
  font-size: 1.5em;
  text-align: left;
  padding: 0;
  width: auto;
  color: ${(props) => (props.passed ? '#11C141' : 'crimson')};
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  text-align: center;
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
`;

export const AccentText = styled.p`
  color: ${colors.light};
  font-size: 1.3em;
  margin: 0;
  padding: 0;
`;
