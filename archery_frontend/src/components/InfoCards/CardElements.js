import React from 'react';
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {color, convertHexToRgba} from '../../colors';
import { FaRegCaretSquareLeft } from 'react-icons/fa';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({$lightBg}) => ($lightBg ? color.light1.bg : color.dark1.bg)};
  padding: 50px 0;
`;

export const CardWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(LinkS)`
  height: 100%;
  min-width: 330px;
  max-width: 380px;
  margin: 0 10px;
  color: ${({$lightTheme}) => ($lightTheme ? color.dark1.fg : color.light1.fg)};
  text-decoration: none;
  overflow: hidden;
  background: ${({$lightTheme}) => ($lightTheme ? color.light1.bg : color.dark1.bg)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CardIcon = styled.img`
  width: 200px;
  margin-bottom: 10px;
`;

export const CardH1 = styled.h1`
  font-size: 2.5rem;
  color: ${({$lightText}) => ($lightText ? color.light1.fg : color.dark1.fg)};
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const CardH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const CardP = styled.p`
  font-size: 1rem;
  text-align: center;
  white-space: pre-line;
  max-width: 100%;
  overflow-wrap: break-word;
`;