function powGen() {
    const cache = {}  
    const pow = (base, exp) => {
        const val = `${base}^${exp}`;       
    if (cache[val] !== undefined) {
            return cache[val];
        }
    if (exp === 0) {
        cache[val] = 1;
        return 1;
        }
        cache[val] = base * pow(base, exp - 1);
        return cache[val];
    };
return pow;
}
const power = powGen();

console.log(power(2, 3));
console.log(power(2, 5)); 
console.log(power(2, 3)); 