// core module
// file system
const fs = require('fs');
const readline = require('readline');


// menulis string ke file (Synchronous)
// fs.writeFileSync('test.txt','Hello World secara synchronous!');

// Membaca isi file (Ansynchronous)
// fs.readFile('test.txt','utf-8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Membuat object readline input dan output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Membuat pertanyaan menggunakan question 
rl.question('What is your name? ', (name)=> {
    console.log(`Thank you ${name}`);

    rl.close()
});
