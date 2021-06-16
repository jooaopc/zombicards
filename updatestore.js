const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const results = [];

fs.createReadStream("store.csv")
  .pipe(csv())
  .on("data", (d) => {
    let card = {
      id: parseInt(d.id),
    };

    card.vermelho = {
      quantidade: parseInt(d["vermelho-numero"]),
      tipo: d["vermelho-tipo"],
    };
    card.laranja = {
      quantidade: parseInt(d["laranja-numero"]),
      tipo: d["laranja-tipo"],
    };
    card.amarelo = {
      quantidade: parseInt(d["amarelo-numero"]),
      tipo: d["amarelo-tipo"],
    };
    card.azul = {
      quantidade: parseInt(d["azul-numero"]),
      tipo: d["azul-tipo"],
    };

    return results.push(card);
  })
  .on("end", () => {
    let resultJson = JSON.stringify(results)
    fs.writeFile(
      path.resolve(__dirname, "src", "store.json"),
      resultJson,
      function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
      }
    );
  });
