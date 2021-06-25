import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding-bottom: 1rem;
  justify-content: center;
`

interface ButtonProps {
  active: boolean;
  color: string;
}

const Button = styled.button<ButtonProps>`
  padding: 1rem;

  width: 100%;
  background: var(--${p => p.color});
  opacity: ${p => p.active ? '1' : '0.1'};
  border: ${p => p.active ? '0.1rem solid black' : '0px'};
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
      </Container>
  );
};
