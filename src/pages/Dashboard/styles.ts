import styled from 'styled-components'

interface ContainerProps {
  perigoColor: string;
}

export const Container = styled.main<ContainerProps>`
  margin: 0 0;
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
