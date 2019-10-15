const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
})

const asking = () => {
    rl.question('Please insert random number between (-1 to 10): ', val => {
        if (val==0) console.log('it is zero number');
        else if (val<4 && val>0) console.log('it is small number');
        else if (val>=4 && val<=7) console.log('it is medium number');
        else if (val>7 && val<=10) console.log('it is big number');
        else console.log('the number out of range');

        asking();
    });
}

asking();
