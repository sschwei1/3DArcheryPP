import styled from 'styled-components';
import {color, convertHexToRgba} from '../../../colors';

export const CountTypeWrapper = styled.div`
  color: ${color.light1.fg};
  width: 100%;
  margin-bottom: 1.2rem;
`;

export const CountTypeTitle = styled.div`
  font-size: 1.0rem;
  margin-bottom: 6px;
  width: 100%;
  color: ${color.light1.fg};
`;

export const CountTypeSelectWrapper = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: center;
  /* margin: 10px; */
`;

export const CountTypeField = styled.div`
  padding: 10px;
  border-radius: 2px;
  background: ${color.light1.bg};
  background: ${({$isSelected}) => ($isSelected ?
    convertHexToRgba(color.light1.bg, 1) :
    color.light1.bg)};
  color: ${color.dark1.fg};
  height: 42px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  margin-bottom: 6px;
  cursor: ${({$isSelected}) => ($isSelected ?
    `default` :
    `pointer`)};
  border: ${({$isSelected}) => ($isSelected ?
    `2px solid ${color.primary}` :
    `0`)};
  box-shadow: 0;
  transition: 0.2s ease all;
  box-shadow: ${({$isSelected}) => ($isSelected ?
    `inset 1px 1px 6px ${convertHexToRgba(color.dark1.bg, 0.7)}` :
    `0`)};

  margin: 0 5px;

  &:first-child{
    margin-left: 0;
    margin-right: 5px;
  }

  &:last-child{
    margin-left: 5px;
    margin-right: 0;
  }

  ${({$isSelected}) => (
    $isSelected ? `` :
    `&:hover{
      box-shadow: inset 0 0 12px ${convertHexToRgba(color.dark1.bg, 0.7)};
    }`
  )}
`;