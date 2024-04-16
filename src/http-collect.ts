import * as http from 'http';

const url: string = process.argv[2];
let totalData: string = '';

const request = http.get(url, (response) => {
    response.setEncoding('utf8');

    response.on('data', (chunk: string) => {
        totalData += chunk;
    });

    response.on('end', () => {
        console.log(totalData.length);
        console.log(totalData);
    });
});

request.on('error', (error: Error) => {
    console.error(`Error en la solicitud: ${error.message}`);
});
