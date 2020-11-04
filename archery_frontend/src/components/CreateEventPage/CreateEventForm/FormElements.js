import styled from 'styled-components';
import {color, convertHexToRgba} from '../../../colors';
import { ButtonRoute } from '../../ButtonEelement';

export const SiteWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color.primary};
`;

export const FormContainer = styled.div`
  max-width: 1000px;
  max-height: 90%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin: auto 10%;
  border-radius: 10px;
  box-shadow: 0 5px 16px ${color.dark1.bg};
  background: ${color.dark1.bg};

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

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const FormTitle = styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  color: ${color.light1.fg};
`;

export const FormInputWrapper = styled.div`
  width: 100%;
  grid-area: ${({$col}) => $col};
  margin-bottom: 1.2rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 1.0rem;
  margin-bottom: 6px;
  width: 100%;
  color: ${color.light1.fg};
`;

export const FormInput = styled.input`
  display: block;
  padding: 0 10px;
  outline: none;
  border-radius: 2px;
  height: 42px;
  width: 100%;
  border: none;
  min-width:100%;
  font-size: 14px;
  margin-top: 0.5rem;
  background: ${color.light1.bg};

  &::placeholder{
    color: ${color.placeholder};
    font-size: 14px;
  }
`;

export const FormFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${($colCnt) => ('repeat(colCnt, 1fr)')};
  text-align: center;
`;

export const FormSectionDivider = styled.hr`
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const FormSectionWrapper = styled.div`
  width: 100%;
`;

export const FormHeadWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col0 col0' 'col1 col2';

  @media screen and (max-width: 768px){
    grid-template-areas: 'col0 col0' 'col1 col1' 'col2 col2';
  }
`;

export const FormSectionName = styled.div`
  color: ${color.light1.fg};
  margin-bottom: 1rem;
  grid-area: col0;
`;

export const FormBodyWrapper = styled.div``;

export const FormError = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: ${color.error};
`;

export const FormBtnWrapper = styled.div`
  width: 100%;
`;

export const NavBtn = styled(ButtonRoute)`
  background: ${color.dark1.bg};
  color: ${color.light1.fg};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
  box-shadow: 0;

  &:hover{
    background: ${color.dark1.bg};
    box-shadow: inset 0 0 14px ${convertHexToRgba(color.light1.bg, 0.7)};
  }
`;