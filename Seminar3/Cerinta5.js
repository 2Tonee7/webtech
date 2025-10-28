const cenzureaza = (text, dictionar) => {
    const cuvinte = text.split(' ')
    for (let i = 0; i < cuvinte.length; i++) {
        for (let j = 0; j < dictionar.length; j++) {
            if (cuvinte[i] === dictionar[j]) {
                const c = cuvinte[i]
                let cenzurat = c[0]
                for (let k = 1; k < c.length - 1; k++) {
                    cenzurat += '*'
                }
                if (c.length > 1) cenzurat += c[c.length - 1]
                cuvinte[i] = cenzurat
            }
        }
    }
    return cuvinte.join(' ')
}
const text = "javascript este minunat"
const dictionar = ["este"]
console.log(cenzureaza(text, dictionar))  