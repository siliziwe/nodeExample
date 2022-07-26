// console.log(__dirname);
// console.log(__filename);
// const os = require('os');
// const path = require('path')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// const sum = require('./addition');
// console.log(sum(2,5));



// const file = require ('fs');
// const path = require ('path');
// file.readFile('./data.txt', 'utf8', (err, data)=> {
//     if(err) throw err;
//     console.log(data);
// });

// file.readFile(path.join(__dirname, './data.txt'), 'Example 3', err=>{
//     if(err) throw err;
//     console.log('Writing to a file');
// });




// const fs = require('fs');
// const path = require('path');

// fs.appendFile('file.txt', 'First line added!', 'utf-8', err => {
//     if (err) {
//     throw err;
// }
// console.log('First line written.');
// fs.appendFile('file.txt', '\nSecond line appended.', err => {
//     if (err) {
//     throw err;
//     }
//     console.log('Second line appended.');
//     });
// });
// fs.readFile('/Users/siliziwe/data.txt', 'utf8', (err, data) => {
//     if (err) {
//     console.error(err);
//     return;
//     }
//     console.log(data);
// });

const file = require('fs');
const path = require('path');
file.readFile('./data.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});
console.log('Read Me');
process.on('uncaughtException', err=> {
    console.log(err.message);
});

file.writeFile(path.join(__dirname,'./data.txt'), 'hiii', err=> {
    if(err) throw err;
    console.log('Writen');
});

file.appendFile(path.join(__dirname,'./data.txt'), '\nappended', err=> {
    if(err) throw err;
    console.log('Appending');
});
console.log('Appending');




