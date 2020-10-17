import React from 'react';
import { scrollProps } from '../../ButtonEelement';
import {ComponentWrapper} from '../../Wrapper';
import {
  CardContainer,
  CardH1,
  CardWrapper,
  Card,
  CardIcon,
  CardH2,
  CardP
} from './CardElements';

const InfoCards = ({id, title, cards, lightTheme, children}) => {
  return (
    <ComponentWrapper id={id}>
      <CardContainer $lightBg={lightTheme}>
        <CardH1 $lightText={!lightTheme}>{title}</CardH1>
        <CardWrapper>
          {
            cards.map((info, index) => 
            <Card key={index} to={info.cardLink} $lightTheme={!lightTheme} {...scrollProps}>
              <CardIcon src={info.iconSrc} alt={`${info.title}_icon`} />
              <CardH2>{info.title}</CardH2>
              <CardP>
                {info.description}
              </CardP>
            </Card>)
          }
        </CardWrapper>
      </CardContainer>
      {children}
    </ComponentWrapper>
  )
}

export default InfoCards;
