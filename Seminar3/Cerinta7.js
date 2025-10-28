const media = (numere) => {
    const suma = numere.reduce((total, n) => total + n, 0)
    return suma / numere.length
}
const valori = [4, 5, 12,]
console.log(media(valori))  