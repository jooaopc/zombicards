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

  transform: ${(p) => p.isClicked ? 'rotateY(180deg)' : 'none'};
  content: ${(p) => p.isClicked ? '' : ''};

  position:relative;
  float: left;
`

export const CardFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  backface-visibility: hidden;
  background-image: linear-gradient(#6a1610, #c82b2c, #6a1610);
  border-radius: 10px;

  div + & {
    transform: rotateY(180deg);
  }

  & > * {
    border: 2px solid var(--black);
    background: var(--white);
    font-size: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0.5rem 0;

    width: 80%;
  }

  .empty {
    border: 0;
    margin: 0;
    padding: 0;
  }


  img {
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
  }
`
