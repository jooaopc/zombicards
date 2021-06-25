import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    max-width: 1000px;
  }

  padding-bottom: 1rem;
`

interface ButtonProps {
  active: boolean;
  color: string;
}

const Button = styled.button<ButtonProps>`
  padding: 1rem 2rem;

  width: 100%;
  background: var(--${p => p.color});
  opacity: ${p => p.active ? '1' : '0.1'};
  border: ${p => p.active ? '0.2rem solid black' : '0px'};
  font-weight: bold;
`

interface PerigoProps {
  perigo: CorPerigo;
  setPerigo: (p: CorPerigo) => void;
}

type CorPerigo = "azul" | "amarelo" | "laranja" | "vermelho";

export const Perigo = ({ perigo, setPerigo }: PerigoProps) => {
  return (
      <Container>
      <div>
        <Button
          aria-label="Azul"
          color="blue"
          active={perigo === "azul"}
          onClick={_ => setPerigo("azul")}
        />

        <Button
          aria-label="Amarelo"
          color="yellow"
          active={perigo === "amarelo"}
          onClick={_ => setPerigo("amarelo")}
        />

        <Button
          aria-label="Laranja"
          color="orange"
          active={perigo === "laranja"}
          onClick={_ => setPerigo("laranja")}
        />

        <Button
          aria-label="Vermelho"
          color="red"
          active={perigo === "vermelho"}
          onClick={_ => setPerigo("vermelho")}
        />
      </div>
      </Container>
  );
};
