import styled from 'styled-components';
import { color } from '../../../colors';

export const ListTitle = styled.div`
  color: ${color.light1.fg};
  font-weight: bold;
`;

export const ListWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ListElement = styled.div`
  color: ${color.light1.fg};
  padding: 0 10px;
  margin-bottom: 5px;
  &::before{
    font-weight: bold;
    content: '-';
  }
`;