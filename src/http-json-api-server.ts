import * as http from 'http';
import { URL } from 'url';

const port: number = parseInt(process.argv[2], 10);

interface TimeResult {
  hour: number;
  minute: number;
  second: number;
}

interface UnixTimeResult {
  unixtime: number;
}

http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  if (!req.url) {
    res.writeHead(404);
    return res.end();
  }
  
  const parsedUrl: URL = new URL(req.url, `http://localhost:${port}`);
  const time: Date = new Date(parsedUrl.searchParams.get('iso') || '');

  let result: TimeResult | UnixTimeResult | null = null;

  if (parsedUrl.pathname === '/api/parsetime') {
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
  } else if (parsedUrl.pathname === '/api/unixtime') {
    result = {
      unixtime: time.getTime(),
    };
  }

  if (req.method === 'GET' && result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(port);
