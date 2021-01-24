import styled from 'styled-components';
import { COLORS } from '../../../constants/global_styles';

export const Container = styled.section`
  position: fixed;
  top: 50%;
  left: 49.5%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  transform: translate(-50%, -50%);
  transition: border 0.32s ease;
  border: 3px solid ${(props) => (props.color ? props.color : COLORS.light)};
  border-radius: 5px;
  padding: 1em;
  max-width: 560px;
  width: 100%;
  background-color: ${COLORS.shadow};
  color: ${COLORS.accent};

  @media (max-width: 800px) {
    width: 90%;
  }

  @media (max-height: 635px) {
    position: unset;
    margin: 0 auto;
    margin-top: 0.75rem;
    transform: none;
  }
`;

export const VictoryContainer = styled(Container)`
  display: grid;
  grid-template-rows: 100px, 1fr;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 660px;

  @media (max-height: 1090px) {
    position: unset;
    margin: 0.75rem auto;
    transform: none;
  }
`;

export const PlayButtonContainer = styled.div`
  display: flex;
  position: relative;
  left: 1.5em;
  flex-direction: ${(prop) => prop.dir};
  flex-wrap: ${(prop) => prop.wrap};
  margin-bottom: 3em;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
`;

export const Audio = styled.div``;

export const Choices = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Score = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.1em;
  margin-bottom: 2em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: ${(props) => props.dir};
  flex-wrap: ${(props) => props.wrap};
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  padding: 0.7em;
`;

export const Item = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 82%;
  height: 100%;
  padding: 0.7em;
  text-align: center;
`;

export const Button = styled.button`
  grid-column: 1/-1;
  place-self: center;
  outline: 1px solid transparent;
  margin: ${(props) =>
    props.type === 'submit' ? '1rem 0' : '0em 0 0.3em 0.6em'};
  border: 0;
  border-radius: 4px;
  padding: 0.2em 0.6em;
  background-color: ${COLORS.light};
  cursor: pointer;

  transition: background-color 0.2s ease;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${COLORS.shadow};

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${COLORS.accent};
  }

  @media (max-width: 510px) {
    padding: 0.2em 0.4em;
    font-size: 1.3rem;
  }
`;

export const AgainButton = styled(Button)`
  font-size: 2rem;
  margin: 0.4em 0em;

  @media (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

export const PlayButton = styled.button`
  border-style: inset;
  border-width: 18px 0 18px 40px;
  border-color: transparent transparent transparent ${COLORS.light};
  width: 0;
  height: 0;
  background-color: ${COLORS.shadow};
  cursor: pointer;

  &:focus {
    outline: solid 1px transparent;
  }

  &:hover {
    border-color: transparent transparent transparent ${COLORS.accent};
  }

  @media (max-width: 400px) {
    border-width: 15px 0 15px 35px;
  }
`;

export const Title = styled.h2`
  grid-column: 1 / -1;
  margin: 0 0 15px;
  text-align: center;
  font-size: 3em;

  @media (max-width: 740px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const Count = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 1.3rem;

  @media (max-width: 740px) {
    font-size: 1rem;
  }
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
