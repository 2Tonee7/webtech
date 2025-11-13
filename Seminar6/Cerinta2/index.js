
let firstRow = document.querySelector("tbody tr:first-child");
if (firstRow) {
     firstRow.style.backgroundColor = 'blue';
}

let lastRow = document.querySelector("tbody tr:last-child");
if (lastRow) {
    lastRow.style.backgroundColor = 'green';
}

let middleOddRows = document.querySelectorAll("tbody tr:nth-child(odd):not(:first-child):not(:last-child)");
if (middleOddRows && middleOddRows.length > 0) {
    for (let item of middleOddRows) {
    item.style.backgroundColor = 'violet';
    }
}