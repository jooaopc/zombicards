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

  background: ${p => p.color};
  opacity: ${p => p.active ? '1' : '0.6'};
  border: ${p => p.active ? '0.5rem solid black' : '0px'};
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
          color="blue"
          active={perigo === "azul"}
          onClick={_ => setPerigo("azul")}
        >
          Azul
        </Button>

        <Button
          color="yellow"
          active={perigo === "amarelo"}
          onClick={_ => setPerigo("amarelo")}
        >
          Amarelo
        </Button>

        <Button
          color="orange"
          active={perigo === "laranja"}
          onClick={_ => setPerigo("laranja")}
        >
          Laranja
        </Button>

        <Button
          color="red"
          active={perigo === "vermelho"}
          onClick={_ => setPerigo("vermelho")}
        >
          Vermelho
        </Button>
      </Container>
  );
};
