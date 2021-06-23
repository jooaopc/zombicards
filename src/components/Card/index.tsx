import { useState, useEffect, ReactNode } from 'react'

import { Container, Button, InnerCard, CardFace } from './styles'

interface CardProps {
  proximoCard: () => void;
  children1: ReactNode;
  transformChildren1?: ReactNode;
  children2: ReactNode;
  transformChildren2?: ReactNode;
}

// THANKS:
// - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card
// - https://codepen.io/desandro/pen/LmWoWe
// - https://stackoverflow.com/a/12121309
// - https://www.w3schools.com/howto/howto_css_aspect_ratio.asp
export function Card({
  proximoCard,
  children1,
  children2,
  transformChildren1,
  transformChildren2
}: CardProps) {
  const [ isClicked, setIsClicked ] = useState(false)
  const [ transformChildren1Modified, setTransformChildren1Modified ] = useState(transformChildren1)
  const [ transformChildren2Modified, setTransformChildren2Modified ] = useState(transformChildren2)

  useEffect(() => {
    if(!transformChildren1){
      setTransformChildren1Modified(<span className="empty"></span>)
    }
  }, [transformChildren1])

  useEffect(() => {
    if(!transformChildren2){
      setTransformChildren2Modified(<span className="empty"></span>)
    }
  }, [transformChildren2])

  function handleClick(){
    proximoCard()
    setIsClicked(!isClicked)
  }
  return (
    <Container onClick={handleClick} >
      <Button>
      <InnerCard isClicked={isClicked}>
        <CardFace className="card front">
          {isClicked && transformChildren1Modified}
          {!isClicked && children1}
        </CardFace>
        <CardFace className="card back">
          {!isClicked && transformChildren2Modified}
          {isClicked && children2}
        </CardFace>
      </InnerCard>
      </Button>
    </Container>
  )
}
