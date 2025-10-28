const suma = (numere, divizor) => {
    return numere
        .filter(numar => numar % divizor === 0) 
        .reduce((suma, curent) => suma + curent, 0)
}

const val = [3, 5, 12, 3, 5, 3]
const rezultat = suma(val, 3)

console.log("rezultat:", rezultat)