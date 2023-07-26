# zombicards

[![emojicom](https://img.shields.io/badge/emojicom-%F0%9F%90%9B%20%F0%9F%86%95%20%F0%9F%92%AF%20%F0%9F%91%AE%20%F0%9F%86%98%20%F0%9F%92%A4-%23fff)](http://neni.dev/emojicom) [![contributing](https://img.shields.io/badge/CONTRIBUTING-CONTRIBUINDO-%23fff)](http://neni.dev/contributing)

Substituição das cartas de zumbis do jogo de tabuleiro Zombicide

## Desenvolvimento

### Ambiente

```sh
npm i
npm run update:store
```

### Execução

```sh
npm start
```

### Testes

#### End to end

Os testes ocorrem em `localhost`, portanto a aplicação já deve ter sido iniciada. Para executá-los:

- Por linha de comando:

```sh
npm run test:e2e

# ou

npm run test:e2e:nyan
```

- Por UI:

```sh
npm run cy:open
```
