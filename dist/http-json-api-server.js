"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const url_1 = require("url");
const port = parseInt(process.argv[2], 10);
http.createServer((req, res) => {
    if (!req.url) {
        res.writeHead(404);
        return res.end();
    }
    const parsedUrl = new url_1.URL(req.url, `http://localhost:${port}`);
    const time = new Date(parsedUrl.searchParams.get('iso') || '');
    let result = null;
    if (parsedUrl.pathname === '/api/parsetime') {
        result = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds(),
        };
    }
    else if (parsedUrl.pathname === '/api/unixtime') {
        result = {
            unixtime: time.getTime(),
        };
    }
    if (req.method === 'GET' && result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(port);
