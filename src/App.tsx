import { useEffect, useState } from 'react'
import { Dashboard } from "./pages/Dashboard";
import { Container } from "@material-ui/core";

import cards from './store.json'

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

interface CardZumbi {
  id: number;
  azul: PerigoZumbi;
  amarelo: PerigoZumbi;
  laranja: PerigoZumbi;
  vermelho: PerigoZumbi;
}


function App() {
  const [ typedcards, setTypedcards ] = useState([] as CardZumbi[])

  useEffect(() => {
    var t: CardZumbi[] = cards as CardZumbi[];
    setTypedcards(t)
  }, [])
  return (
  <Container>
    <Dashboard baralho={typedcards} />
  </Container>
  );
}

export default App;
