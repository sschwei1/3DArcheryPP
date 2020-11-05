import styled from 'styled-components';
import { color, convertHexToRgba } from '../../../colors';
import { ButtonDiv } from '../../ButtonEelement';

export const GameWrapper  = styled.div`
  max-width: 500px;
  width: 90%;
  max-height: 90%;
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin: auto 10%;
  border-radius: 10px;
  box-shadow: 0 5px 16px ${color.dark1.bg};
  background: ${color.dark1.bg};
`;

export const GameInnerWrapper = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const ErrorView = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: ${color.light1.fg};
`;

export const ViewTitle = styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  color: ${color.light1.fg};
`;

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  overflow: auto;
  padding: 5px 10px;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-button {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${convertHexToRgba(color.light1.bg, 0.7)};
    border: 0;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover,
  &::-webkit-scrollbar-thumb:active {
    background: ${convertHexToRgba(color.light1.bg, 0.9)};
  }
  &::-webkit-scrollbar-track {
    background: ${convertHexToRgba(color.light1.bg, 0.2)};
    border: solid 5px transparent;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track:hover,
  &::-webkit-scrollbar-track:active {
    background: ${convertHexToRgba(color.light1.bg, 0.2)};
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const LoadingElem = styled.div`
  text-align: center;
  padding: 5px 20px;
  color: ${color.light1.fg};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const NavBtn = styled(ButtonDiv)`
  background: ${color.dark1.bg};
  color: ${color.light1.fg};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
  box-shadow: 0;

  &:hover{
    background: ${color.dark1.bg};
    box-shadow: inset 0 0 14px ${convertHexToRgba(color.light1.bg, 0.7)};
  }
`;

export const ViewRow = styled.div`
  width: 100%;
  padding: 10px 0;
  display:flex;
  grid-template-columns: 50% 50%;
  transition: all 0.2s ease;
  color: ${color.light1.fg};
`;

export const ViewCol = styled.div`
  padding: 0 10px;
  overflow-wrap: break-word;
  font-weight: ${({$bold}) => ($bold ? 'bold' : 'normal')};
`;

export const ShotButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ShotButton = styled.div`
  color:white;
  text-align: center;
  flex: 1;
  cursor: pointer;
  border: 1px solid white;
  padding: 10px 0;

  ${({$isSelected}) => ($isSelected ? `background: ${convertHexToRgba(color.light1.bg, 0.3)};` : '')}

  &:hover{
    background: ${convertHexToRgba(color.light1.bg, 0.3)};
  }

  &:first-child{
    border-radius: 10px 0 0 10px;
  }

  &:last-child{
    border-radius: 0 10px 10px 0;
  }
`;