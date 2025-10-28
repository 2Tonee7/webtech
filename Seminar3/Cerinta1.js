
const ani = [1990, 2003, 2004, 2010, 1978, 2012];
const majori = ani
    .map( an => 2025 - an)
    .filter(an => an >= 18);
console.log(majori);

