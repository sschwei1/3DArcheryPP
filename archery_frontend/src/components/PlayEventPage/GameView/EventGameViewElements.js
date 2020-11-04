import styled from 'styled-components';
import { color } from '../../../colors';

export const AuthWrapper = styled.div`
  max-width: 500px;
  width: 90%;
  max-height: 90%;
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin: auto 10%;
  border-radius: 10px;
  box-shadow: 0 5px 16px ${color.dark1.bg};
  background: ${color.dark1.bg};
`;