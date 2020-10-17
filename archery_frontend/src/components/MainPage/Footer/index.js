import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaReddit, FaRegCopyright, FaTwitter, FaYoutube } from 'react-icons/fa';
import { scrollProps } from '../../ButtonEelement';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkRoute as FooterLinkR,
  SocialMedia,
  SocialMediaWrap,
  SocialLogoLink,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLinkR to='createevent'>Create Event</FooterLinkR>
              <FooterLinkR to='eventoverview'>Event Overview</FooterLinkR>
              <FooterLinkR to='howto'>How to use</FooterLinkR>
              <FooterLinkR to='dev/sswe'>About Sebastian Schweiger</FooterLinkR>
              <FooterLinkR to='dev/klar'>About Kevin Larson</FooterLinkR>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLinkR to='createevent'>Create Event</FooterLinkR>
              <FooterLinkR to='eventoverview'>Event Overview</FooterLinkR>
              <FooterLinkR to='howto'>How to use</FooterLinkR>
              <FooterLinkR to='dev/sswe'>About Sebastian Schweiger</FooterLinkR>
              <FooterLinkR to='dev/klar'>About Kevin Larson</FooterLinkR>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLinkR to='createevent'>Create Event</FooterLinkR>
              <FooterLinkR to='eventoverview'>Event Overview</FooterLinkR>
              <FooterLinkR to='howto'>How to use</FooterLinkR>
              <FooterLinkR to='dev/sswe'>About Sebastian Schweiger</FooterLinkR>
              <FooterLinkR to='dev/klar'>About Kevin Larson</FooterLinkR>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogoLink to='welcome' {...scrollProps}>
              <SocialLogo src={require('../../../images/logos/logo_transparent_no_name_swapped_colors.png')} />
              3dium
            </SocialLogoLink>
            <WebsiteRights>
              3dium © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='//instagram.com/sschwei1' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='//www.youtube.com/user/LasgCe' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='//twitter.com/lasgce' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='//github.com/sschwei1' target='_blank' aria-label='Github'>
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
