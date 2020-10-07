import React from 'react';
import {
  ButtonScroll as ButtonS,
  ButtonRoute as ButtonR,
  scrollProps
} from '../ButtonEelement';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';

const InfoSection = ({id, lightTheme, topLine, headline,
    description, buttonLabel, buttonLink, buttonPageLink,
    imgStart, img, alt}) => {

  let buttonProps = {
    to: buttonLink,
    primary: lightTheme ? 0 : 1,
    dark: lightTheme ? 0 : 1
  }

  let button = buttonPageLink ?
    <ButtonS
      {...scrollProps}
      {...buttonProps}
    >{buttonLabel}</ButtonS> :
    <ButtonR {...buttonProps}>
      {buttonLabel}
    </ButtonR>;

  return (
    <>
      <InfoContainer lightBg={lightTheme} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={!lightTheme}>{headline}</Heading>
                <Subtitle lightText={!lightTheme}>{description}</Subtitle>
                <BtnWrap>
                  {button}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
              <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}

export default InfoSection
