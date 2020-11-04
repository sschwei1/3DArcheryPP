import styled from 'styled-components';
import {color, convertHexToRgba} from '../../../colors';

export const SiteWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color.primary};
`;

export const InfoContainer = styled.div`
  width: 90%;
  max-height: 90%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin: auto 10%;
  border-radius: 10px;
  box-shadow: 0 5px 16px ${color.dark1.bg};
  background: ${color.dark1.bg};
  justify-content: center;
  padding: 100px 20px;
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  color: ${color.light1.fg};
`;

export const Info = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  color: ${color.light1.fg};
`;

export const EventCodeField = styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  color: ${color.light1.fg};
  letter-spacing: 8px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;