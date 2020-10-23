import styled from 'styled-components';
import {color, convertHexToRgba} from '../../../colors';
import {MdClose} from 'react-icons/md';

export const ModalWrapper = styled.div`
  max-width: 800px;
  width: 80%;
  height: 80%;
  box-shadow: 0 5px 16px ${convertHexToRgba(color.dark1.bg, 0.2)};
  background: ${color.dark1.bg};
  color: ${color.light1.fg};
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 20px;
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

export const ModalBtnWrapper = styled.div`

`;