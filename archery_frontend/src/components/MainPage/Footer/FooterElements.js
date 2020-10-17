import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import { color, convertHexToRgba } from '../../../colors';
import { FaAlignJustify } from 'react-icons/fa';

export const FooterContainer = styled.div`
  background: ${color.dark1.bg};
  box-shadow: 0 2px 4px, 0 -1px 2px 0 ${convertHexToRgba(color.light1.bg, 0.70)};

`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: ${color.light1.fg};

  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLinkRoute = styled(LinkR)`
  color: ${color.light1.fg};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${color.primary};
    transition: 0.3s ease-out;
  }
`;

export const FooterLinkScroll = styled(LinkS)`
  color: ${color.light1.fg};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${color.primary};
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`;

export const SocialLogoLink = styled(LinkS)`
  color: ${color.light1.fg};
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SocialLogo = styled.img`
  max-height: 45px;
  max-width: 45px;
  margin-right: 5px;
`;

export const WebsiteRights = styled.small`
  color: ${color.light1.fg};
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
`;

export const SocialIconLink = styled.a`
  color: ${color.light1.fg};
  font-size: 24px;
`;