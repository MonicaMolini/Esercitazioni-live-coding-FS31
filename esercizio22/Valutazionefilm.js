const libreria = [];
function aggiungiLibro(titolo, autore, genere, array) {
    return array.push ({titolo: titolo, autore: autore, genere:genere, valutazioni:[]})
}
aggiungiLibro("Harry Potter", "Rowling", "Fantasy", libreria)
aggiungiLibro("Il signore degli anelli", "Tolkien", "Fantasy", libreria)
aggiungiLibro("Hunger Games", "Suzanne Collins", "Fantasy", libreria)

console.log(libreria)
//Validare
function aggiungiValutazione (titolo, nome, voto) {
    const libro = libreria.find(libro => libro.titolo.toLowerCase() === titolo.toLowerCase())
  //Aggiungere  
  if (libro) {    
        libro.valutazioni.push({utente: nome, voto: voto})
    } else {
        console.log(`Il libro: ${titolo} non esiste!`)
    }

}
function visualizzaValutazione()
{ 
 libreria.forEach(libro => {
    console.log(`${libro.titolo} ha queste valutazioni: `)
    if(libro.valutazioni.length > 0) {
        libro.valutazioni.forEach(voto => console.log(`${voto.utente}: ${voto.voto}`))
    } else {
        console.log(`Non ha recensioni!`)
    }
 })
}
    


aggiungiValutazione("Il signore degli anelli", "marco", 9)
visualizzaValutazione()

