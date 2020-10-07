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
          cards.map((info, index) => 
          <Card key={index} to={info.cardLink}>
            <CardIcon src={info.iconSrc} alt={`${info.title}_icon`} />
            <CardH2>{info.title}</CardH2>
            <CardP>
              {info.description}
            </CardP>
          </Card>)
        }
      </CardWrapper>
    </CardContainer>
  )
}

export default InfoCards;
