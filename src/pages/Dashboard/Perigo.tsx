import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

interface PerigoProps {
  perigo: CorPerigo;
  setPerigo: (p: CorPerigo) => void;
}

type CorPerigo = "azul" | "amarelo" | "laranja" | "vermelho";

export const Perigo = ({ perigo, setPerigo }: PerigoProps) => {
  return (
    <RadioGroup row aria-label="position" name="perigo">
      <FormControlLabel
        control={<Radio color="primary" />}
        onClick={_ => setPerigo("azul")}
        checked={perigo === "azul"}
        label="Azul"
      />
      <FormControlLabel
        control={<Radio color="primary" />}
        onClick={_ => setPerigo("amarelo")}
        checked={perigo === "amarelo"}
        label="Amarelo"
      />
      <FormControlLabel
        control={<Radio color="primary" />}
        onClick={_ => setPerigo("laranja")}
        checked={perigo === "laranja"}
        label="Laranja"
      />
      <FormControlLabel
        control={<Radio color="primary" />}
        onClick={_ => setPerigo("vermelho")}
        checked={perigo === "vermelho"}
        label="Vermelho"
      />
    </RadioGroup>
  );
};
