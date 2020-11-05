import React from 'react'
import { ViewTitle } from '../EventGameViewElements'

const ThreeShotGame = ({gameData}) => {
  return (
    <>
      <ViewTitle>{gameData.name}</ViewTitle>
    </>
  )
}

export default ThreeShotGame;