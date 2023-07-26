import { useState, useEffect } from "react";
import { Zumbis } from "./Zumbis";
import { Perigo } from "./Perigo";
import { Card } from "../../components/Card";

import { Container, FooterCard } from './styles'

import spawn from '../../img/zombi-spawn-cards.jpg'

const perigoColorDicionario = {
  azul: "blue",
  amarelo: "yellow",
  laranja: "orange",
  vermelho: "red"
}

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
  collection: string;
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
  const [perigoColor, setPerigoColor] = useState("");

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

  useEffect(() => {
    setPerigoColor(perigoColorDicionario[perigo])
  }, [perigo]);

  function handleProximoCard() {
    const indexCard = Math.floor(Math.random() * (cardsRemanecentes.length - 1 - 0 + 1)) + 0
    setCardAtual(cardsRemanecentes[indexCard]);
  }

  return (
    <Container
      perigoColor={perigoColor}
    >
      
      <Perigo perigo={perigo} setPerigo={setPerigo} />

      <Card
        proximoCard={handleProximoCard}
        children1={!!zumbiAtual ? <Zumbis zumbi={zumbiAtual} /> : <img src={spawn} alt="verso carta de zumbi"/>}
        children2={<Zumbis zumbi={zumbiAtual} />}
      />

      <FooterCard>
        <ul>
          <li>{cardsRemanecentes.length}/{baralho.length}</li>
          <li>{cardAtual.collection}#{cardAtual.id}</li>
        </ul>
      </FooterCard>
    </Container>
  );
}
