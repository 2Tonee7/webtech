const format = (text, val) => {
    let out = text
    for (let key in val) {
    const tag = "{" + key + "}"
    out = out.replace(tag, val[key])
    }
    return out
}
const text = "un {substantiv} este {adjectiv}"
const val = {
    substantiv: "căluț",
    adjectiv: "drăguț"
}

const rezultat = format(text, val)
console.log(rezultat)