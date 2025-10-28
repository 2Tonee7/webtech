const reduce = (lista, functie, valoare) => {
    let rezultat = valoare

    for (const element of lista) {
        rezultat = functie(rezultat, element)
    }

    return rezultat
}

const numere = [1, 2, 3, 4, 5]
console.log(reduce(numere, (total, element) => total + element, 0))