// Scrivi una funzione in JavaScript che accetti come parametri:

// Una percentuale di sconto (numero intero o decimale).
// Un array di oggetti rappresentanti delle automobili.
//Ogni oggetto nell'array avrà le seguenti proprietà:
// nome: stringa, rappresenta il modello dell'auto.
// marca: stringa, rappresenta la marca dell'auto.
// prezzo: numero, rappresenta il prezzo originale dell'auto.
// sconto: booleano, che indica se l'auto ha diritto allo sconto (true) o meno (false).
// La funzione non deve restituire un array ma deve stampare in console le specifiche delle auto che hanno diritto allo sconto, con le seguenti informazioni:

// nome: il nome dell'auto.
// marca: la marca dell'auto.
// prezzo originale: il prezzo originale dell'auto.
// prezzo scontato: il prezzo aggiornato che tiene conto della percentuale di sconto.
// sconto applicato: la percentuale di sconto applicata.
// Le auto che non hanno diritto allo sconto non devono essere stampate.

const auto = [
    { nome: "Audi", marca: "A1", prezzo: 45000, sconto: false },
    { nome: "Panda", marca: "Fiat", prezzo: 15000, sconto: true },
    { nome: "Opel Corsa", marca: "Opel", prezzo: 20000, sconto: false },
  ];
  
  function mostraAuto(sconto, array) {
    return array.forEach((automobile) => {
      if (automobile.sconto && typeof sconto === "number") {
        const prezzoScontato =
          automobile.prezzo - (automobile.prezzo * sconto) / 100;
        console.log(
          `l'auto ${automobile.nome} ${automobile.marca} con il prezzo di ${
            automobile.prezzo
          } viene scontata a ${prezzoScontato.toFixed(
            2
          )} con lo sconto del ${sconto}%`
        );
      } else if (typeof sconto !== "number") {
        console.log("lo sconto in percetuale deve essere in formato numerico");
      } else {
        console.log("nessuna auto ha diritto allo sconto");
      }
    });
  }
  
  mostraAuto(10, auto);
  
  // Una funzione per aggiungere nuove macchine all'array.
  
  class Auto {
    constructor(nome, marca, prezzo, sconto) {
      (this.nome = nome),
        (this.marca = marca),
        (this.prezzo = prezzo),
        (this.sconto = sconto);
    }
  }
  
  function aggiungiAuto(array, autoNew) {
    if (typeof autoNew === "object") {
      array.push(autoNew);
    }
  }
  aggiungiAuto(auto, new Auto("Opel Zaffira", "Opel", 16000, true));
  console.log(auto);
  
  // -Una funzione per ottenere un array con le auto che hanno diritto allo sconto.
  function autoSconto(array) {
    return array.filter((automobile) => automobile.sconto);
  }
  const autoScontate = autoSconto(auto);
  console.log(autoSconto(auto));
  
  // -Una funzione per ordinare in base al prezzo crescente le auto scontate.
  function autoOrdinate(array) {
    return array.sort((a, b) => a.prezzo - b.prezzo);
  }
  console.log(autoOrdinate(auto));
  
  // -Una funzione per filtrare le auto scontate in base alla marca.
  function autoMarca(array, marca) {
    return array.filter(
      (automobile) => automobile.marca.toLowerCase() === marca.toLowerCase()
    );
  }
  console.log(autoMarca(autoScontate, "Opel"));
  