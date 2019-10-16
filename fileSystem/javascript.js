const fs = require('fs');
const readline = require('readline');

fs.writeFileSync(
    'jslog.file',
    'my first file\nthis file\ncontains three lines\n',
    'utf8'
); 

readline.createInterface({
    input: fs.createReadStream('jslog.file')
}).on('line', line => {
    console.log(line);
});

console.log(fs.readFileSync('jslog.file', 'utf8'));
