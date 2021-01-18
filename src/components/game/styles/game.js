import styled from 'styled-components';
import { colors } from '../../../global_styles';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 20px;
  max-width: 720px;
  background-color: ${colors.shadow};
  border: 3px solid ${colors.light};
  border-radius: 5px;
  color: ${colors.accent};

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
  border-color: transparent transparent transparent #021121;
  background-color: ${colors.shadow};
  border-style: inset;

  &:focus {
    outline: solid 1px transparent;
  }
`;

export const Button = styled.button`
  background-color: ${colors.light};
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 10px;

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
  flex-direction: ${(props) => props.dir};
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;
