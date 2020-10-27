import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import { color } from '../colors';

export const ButtonScroll = styled(LinkS)`
  border-radius: 50px;
  background: ${({$primary}) => ($primary ? color.primary : color.dark1.bg)};
  white-space: nowrap;
  padding: ${({$big}) => ($big ? '14px 48px' : '12px 30px')};
  color: ${({$dark}) => ($dark ? color.dark1.fg : color.light1.fg)};
  font-size: ${({$fontBig}) => ($fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all0.2s ease-in-out;
    background: ${({$primary}) => ($primary ? color.light1.bg : color.primary)};
  }
`;

export const ButtonRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${({$primary}) => ($primary ? color.primary : color.dark1.bg)};
  white-space: nowrap;
  padding: ${({$big}) => ($big ? '14px 48px' : '12px 30px')};
  color: ${({$dark}) => ($dark ? color.dark1.fg : color.light1.fg)};
  font-size: ${({$fontBig}) => ($fontBig ? '20px' : '16px')};
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
    background: ${({$primary}) => ($primary ? color.light1.bg : color.primary)};
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  background: ${({$primary}) => ($primary ? color.primary : color.dark1.bg)};
  white-space: nowrap;
  padding: ${({$big}) => ($big ? '14px 48px' : '12px 30px')};
  color: ${({$dark}) => ($dark ? color.dark1.fg : color.light1.fg)};
  font-size: ${({$fontBig}) => ($fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all0.2s ease-in-out;
    background: ${({$primary}) => ($primary ? color.light1.bg : color.primary)};
  }
`;

export const ButtonDiv = styled.div`
  border-radius: 50px;
  background: ${({$primary}) => ($primary ? color.primary : color.dark1.bg)};
  white-space: nowrap;
  padding: ${({$big}) => ($big ? '14px 48px' : '12px 30px')};
  color: ${({$dark}) => ($dark ? color.dark1.fg : color.light1.fg)};
  font-size: ${({$fontBig}) => ($fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  display: inline-block;

  &:hover {
    transition: all0.2s ease-in-out;
    background: ${({$primary}) => ($primary ? color.light1.bg : color.primary)};
  }
`;

export const scrollProps = {
  duration: 500,
  exact: 'true',
  offset: -80,
  smooth: true,
  spy: true
};