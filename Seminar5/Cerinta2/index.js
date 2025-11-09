const fs = require('fs');
const path = require('path');
const { rimraf } = require('rimraf'); 
const dirPath = path.join(__dirname, 'MyFolder');
const filePath = path.join(dirPath, 'test.txt');

fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) throw err;
    console.log("Dir craeted!");

    fs.writeFile(filePath, "Test file", (err) => {
        if (err) throw err;
        console.log("File created");

        rimraf(dirPath).then(() => {
            console.log("Dir removed");
        }).catch(err => {
            console.error(err);
        });
    });
});