import fs from 'fs';
import path from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class HtmlEncoder {

    charsToEncode() {
        return ['&', '<', '>', '"', "'", "`"];
    }

    escapeHtml(string, ignoreChars = []) {

        const charsToEncode = this.charsToEncode();
        const ignoreSet = new Set(ignoreChars);

        const replaceMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '`': '&grave;'
        };

        let strArray = Array.from(string);


        for (let i = 0; i < strArray.length; i++) {
            let char = strArray[i];

            if (ignoreSet.has(char) || !replaceMap[char]) {
                continue;
            }

            strArray[i] = replaceMap[char];
        }

        return strArray.join("");
    }
}

let encoder = new HtmlEncoder();

let skipChars = ['`', "'", '"'];

const files = [
    {
        file: "md-parts/intro.md",
        skipChars: skipChars,
    },
    {
        file: "md-parts/libs-installed.md",
        skipChars: skipChars,
    },
    {
        file: "md-parts/npm-commands.md",
        skipChars: skipChars,
    },
];

const outputFile = "README.md";


const content = files
    .map((item) => {
        let rawContent = fs.readFileSync(path.resolve(__dirname, item.file), "utf8");
        return encoder.escapeHtml(rawContent, item.skipChars);
    })
    .join("\n\n");


fs.writeFileSync(outputFile, content, "utf8");

console.log("README.md generated successfully!");
