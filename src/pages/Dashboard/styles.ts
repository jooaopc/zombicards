import styled from 'styled-components'
import spawn from '../../img/zombi-spawn-cards.jpg'

interface ContainerProps {
  perigoColor: string;
}

export const Container = styled.main<ContainerProps>`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  height: 100vh;

  background-image: linear-gradient(to top, var(--${p => p.perigoColor}), var(--background));
`

export const FooterCard = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  color: black;

  ul {
    margin-right: 1rem;
  }
`
