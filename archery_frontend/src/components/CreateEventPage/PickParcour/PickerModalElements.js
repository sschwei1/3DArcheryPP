import styled from 'styled-components';
import {color, convertHexToRgba} from '../../../colors';
import {MdClose} from 'react-icons/md';

export const ModalWrapper = styled.div`
  max-width: 800px;
  width: 90%;
  height: 90%;
  box-shadow: 0 5px 16px ${convertHexToRgba(color.dark1.bg, 0.2)};
  background: ${color.dark1.bg};
  color: ${color.light1.fg};
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 20px;
  padding-top: 60px;
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
`;

export const ModalParcourWrappper = styled.div`
  width: 100%;
  border-bottom: solid 1px ${color.light1.fg};
  padding: 10px 0;
  display:grid;
  grid-template-columns: 1fr 1fr;
  transition: all 0.2s ease;

  ${({$disableHover}) => !$disableHover ? `
    cursor: pointer;

    &:hover{
      background: ${convertHexToRgba(color.light1.fg, 0.3)};
    }
  ` : ``}
`;

export const ModalParcourCol = styled.div`
  padding: 0 10px;
`;

export const ModalBtnWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const ModalFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

export const ModalListWrapper = styled.div`
  max-height: 73%;
  overflow: auto;

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