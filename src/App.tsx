import { useEffect, useState } from 'react'
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyle } from './styles/global'
import GithubCorner from 'react-github-corner';

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
  collection: string;
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
  <>
    <GlobalStyle />
    <GithubCorner href="https://github.com/jooaopc/zombicards" />
    <Dashboard baralho={typedcards} />
  </>
  );
}

export default App;
