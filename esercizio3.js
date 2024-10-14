//1. Definisci una funzione 'acquista' che simuli la selezione di un prodotto tra tre categorie (es. abiti, elettronica, cibo).

// Ogni prodotto ha un prezzo fisso:
// Abiti: €50 per unità
// Elettronica: €300 per unità
// Cibo: €8 per unità

// La funzione deve accettare come parametri la categoria e il numero di unità che l'utente vuole acquistare di quel prodotto. La funzione deve restituire il tipo di prodotto, la quantità e il totale del prodotto acquistato

//2. Definisci una funzione 'calcolaSconto' che calcoli il prezzo totale in base alla categoria, alla quantità di prodotti acquistati e al prezzo unitario del prodotto scelto

//Applica eventuali sconti in base alla categoria:
// Abiti: Se l'utente acquista più di 3 pezzi, applica uno sconto del 10% sul totale
// Elettronica: Applica sempre uno sconto del 5% sul totale, indipendentemente dalla quantità
// Cibo: Nessuno sconto applicato

//3. Dopo il calcolo del prezzo e l'applicazione degli sconti, stampa il totale finale indicando il numero di prodotti acquistati e il costo totale.

//4. Definisci una funzione 'start' che consente di simulare più acquisti e ritorna il totale complessivo

//BONUS :Definisci una funzione 'applicaCoupon' che consente all'utente di applicare un coupon sconto al totale degli acquisti
// Il coupon può essere passato come parametro alla funzione di acquisto e può essere uno dei seguenti:
// DISCOUNT10: Applica un ulteriore sconto del 10% sul totale finale
// DISCOUNT20: Applica un ulteriore sconto del 20% sul totale finale
// Se il coupon non è valido o non viene inserito, non si applica alcuno sconto aggiuntivo

function acquista(categoria, quantita) {
  let prodotto;
  let prezzoUnit;

  switch (categoria.toLowerCase()) {
    case "abiti":
      prodotto = "Gonna";
      prezzoUnit = 50;
      break;
    case "elettronica":
      prodotto = "Smartphone";
      prezzoUnit = 300;
      break;
    case "cibo":
      prodotto = "Pizza";
      prezzoUnit = 8;
      break;

    default:
      console.log("categoria non valida");
      break;
  }

  let totale = calcolaSconto(categoria, quantita, prezzoUnit);

  console.log(
    `Hai acquistato ${quantita} ${prodotto} per un totale di €${totale.toFixed(
      2
    )}`
  );

  return totale;
}

const calcolaSconto = (categoria, quantita, prezzoUnit) => {
  let totale = prezzoUnit * quantita;

  if (categoria === "abiti" && quantita > 3) {
    return totale * 0.9;
  } else if (categoria === "elettronica") {
    return totale * 0.95;
  } else if (categoria === "cibo") {
    return totale;
  } else {
    return totale;
  }
};

const applicaCoupon = (totale, coupon) => {
  switch (coupon.toUpperCase()) {
    case "DISCOUNT10":
      return totale * 0.9;

      break;
    case "DISCOUNT20":
      return totale * 0.8;
      break;

    default:
      console.log("Il coupon non è valido");
      return totale;
      break;
  }
};

function start(coupon) {
  let totale = 0;

  totale += acquista("abiti", 2);
  totale += acquista("elettronica", 2);
  totale += acquista("cibo", 8);

  console.log(`Hai acquistato prodotti per un totale di €${totale.toFixed(2)}`);

  totale = applicaCoupon(totale, coupon);

  console.log(`Il totale con lo sconto applicato è €${totale.toFixed(2)}`);

  return totale;
}

start("DISCOUNT10");
