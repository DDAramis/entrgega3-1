import * as fs from 'fs';
import * as path from 'path';

export function filterDir(dirPath: string, extension: string, callback: (err: NodeJS.ErrnoException | null, files?: string[]) => void): void {
 fs.readdir(dirPath, (err, list) => {
    if (err) {
        return callback(err);
    }
    const filteredFiles = list.filter(file => path.extname(file) === '.' + extension);
    callback(null, filteredFiles);
 });
}