import React from 'react';
import {
  CardContainer,
  CardH1,
  CardWrapper,
  Card,
  CardIcon,
  CardH2,
  CardP
} from './CardElements';

const InfoCards = ({id, title, cards}) => {
  return (
    <CardContainer id={id}>
      <CardH1>{title}</CardH1>
      <CardWrapper>
        {
          cards.map(({title, iconSrc, description}, index) => 
          <Card key={index}>
            <CardIcon src={iconSrc} alt={`${title}_icon`} />
            <CardH2>{title}</CardH2>
            <CardP>
              {description}
            </CardP>
          </Card>)
        }
      </CardWrapper>
    </CardContainer>
  )
}

export default InfoCards;
