import styled from 'styled-components';
import {color, convertHexToRgba} from '../../colors';
import {MdClose} from 'react-icons/md';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: 20px;
  padding: 0 20px;
  height: 100%;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

  flex: 0 1 auto;
`;

export const ModalTitle = styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: 24px;
  color: ${color.light1.fg};
`;

export const ModalFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({$columns}) => (`repeat(${$columns}, 1fr)`)};
  grid-column-gap: 20px;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

export const ModalListWrapper = styled.div`
  max-height: 72%;
  overflow: auto;
  flex: 1 1 auto;
  min-height: 80px;

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