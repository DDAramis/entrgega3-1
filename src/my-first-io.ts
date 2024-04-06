import * as fs from 'fs';
import * as path from 'path';

const filePath: string = process.argv[2];
const fileContents: Buffer = fs.readFileSync(filePath);
const lines: string[] = fileContents.toString().split('\n');
const numberOfNewLines: number = lines.length - 1;

console.log(numberOfNewLines);
