import * as fs from 'fs';
import * as path from 'path';

const directoryPath: string = process.argv[2];
const fileExtension: string = '.' + process.argv[3];

fs.readdir(directoryPath, (err: NodeJS.ErrnoException | null, list: string[]) => {
  if (err) {
    return console.error(err);
  }

  list.forEach((file: string) => {
    if (path.extname(file) === fileExtension) {
      console.log(file);
    }
  });
});
