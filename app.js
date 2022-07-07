// core module
// file system
const fs = require('fs');


// menulis string ke file (Synchronous)
// fs.writeFileSync('test.txt','Hello World secara synchronous!');

// Membaca isi file (Ansynchronous)
fs.readFile('test.txt','utf-8', (err,data) => {
    if(err) throw err;
    console.log(data);
});