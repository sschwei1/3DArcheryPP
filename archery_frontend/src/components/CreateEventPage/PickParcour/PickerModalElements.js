import styled from 'styled-components';
import {color, convertHexToRgba} from '../../../colors';

export const ModalParcourWrappper = styled.div`
  width: 100%;
  border-bottom: solid 1px ${color.light1.fg};
  padding: 10px 0;
  display:grid;
  grid-template-columns: 50% 50%;
  transition: all 0.2s ease;
  flex: 0 1 auto;

  font-weight: ${({$bold}) => ($bold ? 'bold' : 'normal')};

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
  width: 100%;
  overflow-wrap: break-word;
  font-size: 14px;
`;

export const ModalLoadMoreCol = styled.div`
  grid-column: 1/3;
  text-align: center;
`;