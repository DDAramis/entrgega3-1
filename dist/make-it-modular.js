"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mymodule_1 = require("./mymodule");
const dirPath = process.argv[2];
const extension = process.argv[3];
(0, mymodule_1.filterDir)(dirPath, extension, (err, files) => {
    if (err) {
        console.error('There was an error:', err);
        return;
    }
    files === null || files === void 0 ? void 0 : files.forEach(file => {
        console.log(file);
    });
});
