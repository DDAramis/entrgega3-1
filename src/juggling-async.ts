import * as http from 'http'; 

const urls: string[] = process.argv.slice(2);
let results: string[] = new Array(urls.length);
let count: number = 0;

function printResults() {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

function httpGet(index: number) {
    http.get(urls[index], (response) => {
        response.setEncoding('utf8');
        let rawData: string = '';

        response.on('data', (chunk: string) => rawData += chunk);
        response.on('end', () => {
            results[index] = rawData;
            count++;

            if ( count === urls.length) {
                printResults();
            }
        });
    }).on('error', (e: Error) => console.error(e));
}

for (let i = 0; i < urls.length; i++) {
    httpGet(i);
}