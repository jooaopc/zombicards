import { Button, FormGroup } from "@material-ui/core";
import { FiberNew } from "@material-ui/icons";

import { useState, useEffect } from "react";
import { Zumbis } from "./Zumbis";
import { Perigo } from "./Perigo";

interface PerigoZumbi {
  quantidade: number;
  tipo:
    | "abominação"
      | "abominação maculada"
        | "balofo"
          | "lerdo"
            | "lerdo maculado"
              | "corredor"
                | "necromante"
                  | "horda";
}

type CorPerigo = "azul" | "amarelo" | "laranja" | "vermelho";

interface CardZumbi {
  id: number;
  azul: PerigoZumbi;
  amarelo: PerigoZumbi;
  laranja: PerigoZumbi;
  vermelho: PerigoZumbi;
}

interface DashboardProps {
  baralho: CardZumbi[];
}

export function Dashboard({ baralho }: DashboardProps) {
  const [cardsRemanecentes, setCardsRemanecentes] = useState([] as CardZumbi[]);
  const [cardAtual, setCardAtual] = useState({} as CardZumbi);
  const [zumbiAtual, setZumbiAtual] = useState({} as PerigoZumbi);
  const [perigo, setPerigo] = useState("azul" as CorPerigo);

  useEffect(() => {
    setCardsRemanecentes(baralho);
  }, [baralho]);

  useEffect(() => {
    setZumbiAtual(cardAtual[perigo]);

    if (!cardsRemanecentes.length) {
      const cardsEmbaralhados = baralho;
      setCardsRemanecentes(cardsEmbaralhados);
    } else {
      let cardsSobrando = cardsRemanecentes.filter(c => c.id !== cardAtual.id)
      setCardsRemanecentes(cardsSobrando)
    }
  }, [cardAtual, perigo, cardsRemanecentes, baralho]);

  function handleProximoCard() {
    const indexCard = Math.floor(Math.random() * (cardsRemanecentes.length - 1 - 0 + 1)) + 0
    setCardAtual(cardsRemanecentes[indexCard]);
  }

  return (
    <>
      <Perigo perigo={perigo} setPerigo={setPerigo} />
      <FormGroup>
        <Button variant="contained" color="primary" onClick={handleProximoCard}>
          {cardAtual.id}
          <FiberNew fontSize="large" />
          {cardsRemanecentes.length}
        </Button>
      </FormGroup>
      <br />
      <Zumbis zumbi={zumbiAtual} />
    </>
  );
}
