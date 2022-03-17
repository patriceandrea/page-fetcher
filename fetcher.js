const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs')

const url = args[0];
const path = args[1];

console.log(url);
console.log(path);
// step 1 make a request and receive a response
// step 2 make write content to file

function main(url, path) {
  // step1: get response
  request(url, (error, response, body) => {
    // console.log(response.body === body);
    // step 2: write response to file
    try {
      fs.writeFileSync(path, body);
      console.log(`Dowloaded and saved ${body.length} bytes to: ${path}`);
    } catch (err) {
      console.error(err);
    }
  });
}

main(url, path);