import styled from 'styled-components';
import {color, convertHexToRgba} from '../../../colors';
import {MdClose} from 'react-icons/md';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: 20px;
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

export const ModalParcourWrappper = styled.div`
  width: 100%;
  border-bottom: solid 1px ${color.light1.fg};
  padding: 10px 0;
  display:grid;
  grid-template-columns: 1fr 1fr;
  transition: all 0.2s ease;
  flex: 0 1 auto;

  ${({$light}) => ($light ? `
    background: ${color.light1.bg};
    color: ${color.dark1.fg};
  ` : ``)}

  ${({$disableHover, $light}) => {
    let col = $light ?
      convertHexToRgba(color.dark1.bg, 0.8):
      convertHexToRgba(color.light1.bg, 0.8);
    return !$disableHover ? `
      box-shadown: 0;
      cursor: pointer;

      &:hover{
        box-shadow: inset 0 0 14px ${col};
      }
    ` : ``;
  }}
`;

export const ModalParcourCol = styled.div`
  padding: 0 10px;
`;

export const ModalBtnWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  justify-content: center;
  display: flex;
  flex: 0 1 auto;
`;

export const ModalFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

export const ModalListWrapper = styled.div`
  max-height: 72%;
  overflow: auto;
  padding: 0 8px;
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

export const ModalLoadMoreCol = styled.div`
  grid-column: 1/3;
  text-align: center;
`;