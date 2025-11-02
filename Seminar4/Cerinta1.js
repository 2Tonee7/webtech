class Stream {
    #value;
    #nextvalue;
    constructor(value, nextValue) {
    this.#value = value;
        this.#nextvalue = nextValue;
    }
    get value() {
    return this.#value;
    }
    get next() {
        this.#value = this.#nextvalue(this.#value);
        return this.#value;
    }
}
class EvenStream extends Stream {
    constructor(startValue) {
    const initialEven = startValue % 2 === 0 ? startValue : startValue + 1;
    super(initialEven, (value) => value + 2);
    }
}

const even = new EvenStream(4); 
for (let i = 0; i < 6; i++) {
    console.log(`even[${i}] = ${even.next}`);
}
