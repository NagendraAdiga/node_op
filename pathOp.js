const path = require("path");

// get the filename
console.log(path.basename(__filename));

// get file path
console.log(__filename);

// get directory
console.log(__dirname);
console.log(path.dirname(__filename));

// get file extension
console.log(path.extname(__filename));

// create path object

// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\nagen\\Desktop\\nodejs',
//     base: 'pathOp.js',
//     ext: '.js',
//     name: 'pathOp'
// }

let pathObj = path.parse(__filename);
console.log(pathObj);

console.log(path.join(__dirname, "test", "hello.html"));
