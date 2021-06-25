import styled from 'styled-components'

const Quantidade = styled.strong`
  &::before {
    content: 'x';
  }
`

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

interface ZumbisProps {
  zumbi: PerigoZumbi;
}

export const Zumbis = ({ zumbi }: ZumbisProps) => {
  const nomePlural = () => {
    if (zumbi.tipo === "balofo" || zumbi.tipo === "lerdo") {
      return `${zumbi.tipo}s`;
    }
    return `${zumbi.tipo}es`;
  };

  const nenhumZumbi = () => <>
      <span>
        🍀😁🎉
      </span>
      <span>
        não veio nada
      </span>
  </>;
  const ativacaoExtra = () => (
    <>
      <span>
        ⚡⚡⚡
      </span>
      <span>
        <strong>nova ativação</strong>
      </span>
      <span>
        {nomePlural()}
      </span>
    </>
  );
  const ehVazio = () => {
    if (!zumbi) return false;
    return !zumbi.tipo && !zumbi.quantidade;
  };

  const ehAtivacaoExtra = () => {
    if (!zumbi) return false;
    return !zumbi.quantidade && zumbi.tipo;
  };

  const ehNormal = () => {
    if (!zumbi) return false;
    return !!zumbi.quantidade && !!zumbi.tipo;
  };

  return (
    <>
      {!zumbi && <div>Começar?</div>}
      {ehAtivacaoExtra() && ativacaoExtra()}
      {ehVazio() && nenhumZumbi()}
      {ehNormal() && (
        <>
        <span>
          🔥🔥🔥
        </span>
        <span>
          <Quantidade>{zumbi.quantidade}</Quantidade>
        </span>
        <span>
          {zumbi.tipo}
        </span>
        </>
      )}
    </>
  );
};
