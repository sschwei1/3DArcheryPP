import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {color, convertHexToRgba} from '../../colors';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${color.dark1.bg};
  padding: 50px 0;
  box-shadow: inset 0 -1px 2px 0 ${convertHexToRgba(color.light1.bg, 0.70)}
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

export const Card = styled(LinkR)`
  height: 100%;
  min-width: 330px;
  max-width: 380px;
  margin: 0 10px;
  color: ${color.dark1.fg};
  text-decoration: none;
  overflow: hidden;
  background: ${color.light1.bg};
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
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const CardH1 = styled.h1`
  font-size: 2.5rem;
  color: ${color.light1.fg};
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