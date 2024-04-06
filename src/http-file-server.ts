import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';


const port: number = +process.argv[2];
const filePath: string = process.argv[3];

http.createServer((request, response) => {
    const readStream = fs.createReadStream(filePath);

    response.writeHead(200, { 'content-type': 'text/plain'});

    readStream.pipe(response);
}).listen(port);
