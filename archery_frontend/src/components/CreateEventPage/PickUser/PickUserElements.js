import styled from 'styled-components';
import {color, convertHexToRgba} from '../../../colors';

export const PickUserContainer = styled.div`
  color: ${color.light1.fg};
  width: 100%;
  padding: 0 15px;
  margin-bottom: 1.2rem;
`;

export const PickUserWrapper = styled.div`
  padding: 0 10px;
  border-radius: 2px;
  background: ${color.light1.bg};
  color: ${({$isSelected}) => ($isSelected ? color.dark1.fg : color.placeholder)};
  height: 42px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  margin-bottom: 6px;
  cursor: pointer;
  box-shadow: 0;
  transition: 0.2s ease all;

  &:hover{
    box-shadow: inset 0 0 12px ${convertHexToRgba(color.dark1.bg, 0.7)};
  }
`;

export const PickUserTitle = styled.div`
  font-size: 1.0rem;
  margin-bottom: 6px;
  width: 100%;
  color: ${color.light1.fg};
`;