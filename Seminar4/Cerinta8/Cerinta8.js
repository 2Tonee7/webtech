import fs from "fs";

function rleCompress(text) {
    let result = "";
    let count = 1;
    for (let i = 1; i <= text.length; i++) {
        if (text[i] === text[i - 1]) {
            count++;
        } else {
            result += text[i - 1] + (count > 1 ? count : "");
            count = 1;
        }
    }
    return result;
}
function compressFile(inputPath, outputPath) {
    fs.readFile(inputPath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err.message);
            return;
        }
        const compressed = rleCompress(data);
        fs.writeFile(outputPath, compressed, "utf8", err => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Success!');
            }
        });
    });
}

compressFile("input.txt", "compressed.txt");