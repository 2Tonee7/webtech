const sorteaza = (lista, cheie) => {
    return lista.slice().sort((a, b) => {
        if (a[cheie] < b[cheie]) 
            {return -1}
        else{
    return 1
            }     
        return 0
    })
}
const persoane = [
    {nume: "Ana", varsta: 25},
    {nume: "Ion", varsta: 30},
    {nume: "Maria", varsta: 20}
]
console.log(sorteaza(persoane, "varsta"))


