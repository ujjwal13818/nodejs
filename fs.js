const {readFileSync , writeFileSync} = require('fs'); 
const first = readFileSync('./content/first.txt' , 'utf-8' );
const second = readFileSync('./content/second.txt' , 'utf-8' );

console.log(first , second);

writeFileSync(
    './content/result-sync.txt',`here is the result: ${first} , ${second}`,
    {flag: 'a'}
)
//if the file is not there node will create and append the content of first and second in that file. flag a is written to avoid override of text if the file is already there and something is written in it.


