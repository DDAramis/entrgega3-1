import * as http from 'http';

const url: string = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');

    response.on('data', (chunk: string) => {
        console.log(chunk);
    });

    response.on('error', (error: Error) => {
        console.error(error);
    });
}).on ('error', (erorr: Error) => {
    console.error(erorr);
});
