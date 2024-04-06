import * as http from 'http';

const url: string = process.argv[2];
let totalData: string = '';

http.get(url, (response) => {
    response.setEncoding('utf8');

    response.on('data', (chunk: string) => {
        totalData += chunk
    })
})