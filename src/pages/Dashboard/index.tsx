import { useState, useEffect } from "react";
import { Zumbis } from "./Zumbis";
import { Perigo } from "./Perigo";
import { Card } from "../../components/Card";

import { Container } from './styles'

import spawn from '../../img/zombi-spawn-cards.jpg'

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

    let cardsSobrando = cardsRemanecentes.filter(c => c.id !== cardAtual.id)

    if (!!cardsRemanecentes.length && cardsSobrando.length !== cardsRemanecentes.length) {
      setCardsRemanecentes(cardsSobrando)
    }
  }, [cardAtual, perigo, cardsRemanecentes]);

  useEffect(() => {
    if (!cardsRemanecentes.length) {
      const cardsEmbaralhados = baralho;
      setCardsRemanecentes(cardsEmbaralhados);
    }
  }, [cardsRemanecentes, baralho])

  function handleProximoCard() {
    const indexCard = Math.floor(Math.random() * (cardsRemanecentes.length - 1 - 0 + 1)) + 0
    setCardAtual(cardsRemanecentes[indexCard]);
  }

  return (
    <Container>
      
      <Perigo perigo={perigo} setPerigo={setPerigo} />

      <Card
        proximoCard={handleProximoCard}
        children1={!!zumbiAtual ? <Zumbis zumbi={zumbiAtual} /> : <img src={spawn}/>}
        transformChildren1={<span></span>}
        children2={<Zumbis zumbi={zumbiAtual} />}
        transformChildren2={<span></span>}
      />

      {cardAtual.id}
      {cardsRemanecentes.length}
      <br />
    </Container>
  );
}
