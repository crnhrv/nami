import styled from 'styled-components';
import { colors } from '../../../global_styles';

export const Spinner = styled.div`
    animation: spin 1.5s infinite linear;
    border: solid 2vmin transparent;
    border-radius: 50%;
    border-right-color: ${colors.secondary};
    border-top-color: ${colors.secondary};
    box-sizing: border-box;
    height: 20vmin;
    left: calc(50% - 10vmin);
    position: fixed;
    top: calc(50% - 10vmin);
    width: 20vmin;
    z-index: 1;
    &:before {
      animation: spin 2s infinite linear;
      border: solid 2vmin transparent;
      border-radius: 50%;
      border-right-color: ${colors.light};
      border-top-color: ${colors.light};
      box-sizing: border-box;
      content: '';
      height: 16vmin;
      left: 0;
      position: absolute;
      top: 0;
      width: 16vmin;
    }
    &:after {
      animation: spin 3s infinite linear;
      border: solid 2vmin transparent;
      border-radius: 50%;
      border-right-color: ${colors.shadow};
      border-top-color: ${colors.shadow};
      box-sizing: border-box;
      content: '';
      height: 12vmin;
      left: 2vmin;
      position: absolute;
      top: 2vmin;
      width: 12vmin;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
`;
