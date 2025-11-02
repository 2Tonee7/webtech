function increaseSalary(salaries, percent) {
    if (!Array.isArray(salaries)) {
        throw new Error("First parameter needs to be an array");
    }
    if (typeof percent !== "number") {
        throw new Error("Second parameter needs to be a number");
    }
    return salaries.map(s => {
     if (typeof s !== "number") {
    throw new Error("All salaries need to be numbers");
    }
        return s + (s * percent / 100);
    });
}
try {
    const result = increaseSalary([1000, 2500, 3000], 10);
    console.log(result);
    increaseSalary("not array", 10);
} catch (err) {
    console.log(err.message);
}
