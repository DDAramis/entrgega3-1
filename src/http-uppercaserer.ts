import * as http from 'http';
import map from 'through2-map';

const port: number = +process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(map((chunk: Buffer) => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  } else {
    res.end('Please send a POST request\n');
  }
});

server.listen(port);
