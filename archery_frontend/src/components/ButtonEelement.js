import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import { darkBgCol, darkFgCol, lightBgCol, lightFgCol, primaryCol } from '../colors';

export const ButtonScroll = styled(LinkS)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? primaryCol : darkBgCol)};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? darkFgCol : lightFgCol)};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all0.2s ease-in-out;
    background: ${({primary}) => (primary ? lightBgCol : primaryCol)};
  }
`;

export const ButtonRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? primaryCol : darkBgCol)};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? darkFgCol : lightFgCol)};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all0.2s ease-in-out;
    background: ${({primary}) => (primary ? lightBgCol : primaryCol)};
  }
`;