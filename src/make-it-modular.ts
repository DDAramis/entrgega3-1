import { filterDir } from './mymodule';

const dirPath: string = process.argv[2];
const extension: string = process.argv[3];

filterDir(dirPath, extension, (err, files) => {
    if (err) {
        console.error('There was an error:', err);
        return;
    }
    files?.forEach(file => {
        console.log(file);
    });
});