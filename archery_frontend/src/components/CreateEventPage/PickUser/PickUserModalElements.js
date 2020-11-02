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
  border: 1px solid ${color.light1.bg};
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  color: ${color.light1.fg};
  padding: ${({$padding}) => ($padding ? '5px' : '0')};
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const SelectedUserElem = styled.div`
  background: ${color.light1.bg};
  color: ${color.dark1.fg};
  padding: 5px 22px 5px 12px;
  border-radius: 200px;
  cursor: pointer;
  position: relative;
  margin: 5px;

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