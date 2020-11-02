import styled from 'styled-components';
import {color, convertHexToRgba} from '../../../colors';

export const ModalUserListItem = styled.div`
  width: 100%;
  border-bottom: solid 1px ${color.light1.fg};
  padding: 10px;
  display:grid;
  grid-template-columns: 1fr;
  transition: all 0.2s ease;
  flex: 0 1 auto;

  font-weight: ${({$bold}) => ($bold ? 'bold' : 'normal')};
  text-align: ${({$center}) => ($center ? 'center' : 'start')};

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

  @media screen and (max-width: 768px){
    text-align: center;
  }
`;

export const SelectedUserWrapper = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: flex-start;
  color: ${color.dark1.fg};
`;

export const SelectedUserElem = styled.div`
  background: ${color.light1.bg};
  padding: 5px 22px 5px 12px;
  border-radius: 200px;
  cursor: pointer;
  position: relative;
  margin-right: 10px;

  &::after{
    content: 'x';
    font-size: 10px;
    color: gray;
    margin-left: 5px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover{
    box-shadow: inset 0 0 3px ${color.dark1.bg};
  }

  &:hover::after{
    color: ${color.error};
  }
`;

export const ModalBtnWrapper = styled.div`
  width: 100%;
`;