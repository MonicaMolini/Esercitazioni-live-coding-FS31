const film=[];

function aggiungiFilm(nome, genere, rating, array){
    return array.push({ nome: nome, genere: genere, rating: rating,})
}

aggiungiFilm('Avatar', 'fantasy', 8, film)
console.log(film)

const daVedere=[]
aggiungiFilm('Interstellar','Fantasy',8, daVedere)

function lista(array){
      array.forEach(x=> console.log(`${x.nome} ${x.rating} ${x.genere}`))
}

lista(daVedere)

aggiungiFilm('Warrior','Azione', 9,daVedere)
aggiungiFilm('Inside out 2', 'Animazione', 8, film)
aggiungiFilm('Il robot selvaggio', 'Animazione', 8, daVedere)
aggiungiFilm('The batman', 'horror',9,film)
aggiungiFilm('Il corvo', 'Drammatico',9, film)
aggiungiFilm('Slavin', 'thriller',9,daVedere)

function filtraPerGenere(x, array){
   return array.filter(film=> film.genere.toLowerCase()===x.toLowerCase() )
}

console.log(filtraPerGenere('animazione', film))

function filtraValutazione(array){
return array.reduce((acc,cur) => {
    if(acc.length===0){
        return [cur]
    } 
    const valutazioneAlta= acc[0].rating
    if(cur.rating>valutazioneAlta){
        return [cur]
    } else if(cur.rating===valutazioneAlta){
        acc.push(cur)
    }
    return acc
}, [])
     
}

console.log(filtraValutazione(film))
