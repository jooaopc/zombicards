import { useState, ReactNode } from 'react'
import styled from 'styled-components'
import spawn from '../../img/zombi-spawn-cards.jpg'

import { Container, InnerCard, CardFace } from './styles'

interface CardProps {
  proximoCard: () => void;
  children1: ReactNode;
  transformChildren1: ReactNode;
  children2: ReactNode;
  transformChildren2: ReactNode;
}

// THANKS:
// - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card
// - https://codepen.io/desandro/pen/LmWoWe
// - https://stackoverflow.com/a/12121309
// - https://www.w3schools.com/howto/howto_css_aspect_ratio.asp
export function Card({ proximoCard, children1, children2, transformChildren1, transformChildren2 }: CardProps) {
  const [ isClicked, setIsClicked ] = useState(false)

  function handleClick(){
    proximoCard()
    setIsClicked(!isClicked)
  }
  return (
    <Container onClick={handleClick} >
      <InnerCard isClicked={isClicked}>
        <CardFace className="card front">
          {isClicked && transformChildren1}
          {!isClicked && children1}
        </CardFace>
        <CardFace className="card back">
          {!isClicked && transformChildren2}
          {isClicked && children2}
        </CardFace>
      </InnerCard>
    </Container>
  )
}
