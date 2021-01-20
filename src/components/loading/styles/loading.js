import styled from 'styled-components';
import { COLORS } from '../../../constants/global_styles';

export const Spinner = styled.div`
    animation: spin 1.5s infinite linear;
    border: solid 2vmin transparent;
    border-radius: 50%;
    border-right-color: ${COLORS.secondary};
    border-top-color: ${COLORS.secondary};
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
      border-right-color: ${COLORS.light};
      border-top-color: ${COLORS.light};
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
      border-right-color: ${COLORS.shadow};
      border-top-color: ${COLORS.shadow};
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
