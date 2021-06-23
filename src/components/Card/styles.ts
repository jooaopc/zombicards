import styled from 'styled-components'

interface ZombieButton {
  isClicked: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  background: transparent;
  border: 0;
  padding: 0;

  width: 100%;
  max-width: 300px;

  perspective: 1000px;
`

export const InnerCard = styled.div<ZombieButton>`
  padding-top: 155%;
  width: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10px;

  transform: ${(p) => p.isClicked ? 'rotateY(180deg)' : 'none'};
  content: ${(p) => p.isClicked ? '' : ''};

  position:relative;
  float: left;

  background-image: linear-gradient(#6a1610, #c82b2c, #6a1610);
`

export const CardFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  backface-visibility: hidden;

  div + & {
    transform: rotateY(180deg);
  }

  & > * {
    border: 2px solid var(--black);
    background: var(--white);
    padding: 3rem;
  }

  img {
    border: 0;
    padding: 0;
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
  }
`
