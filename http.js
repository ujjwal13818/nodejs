const http = require('http');

// const server = http.createServer((req , res) =>
// {
    // res.write(`welcome to my home page`);
//    res.end()
// })
//res = response
//req = request



//don't forget to run code before going to web browser
//don't forget to stop code after every change
const server = http.createServer((req , res) =>
{
if(req.url === '/'){
    res.end(`welcome to my webpage`);
}
if(req.url === '/about'){
    res.end(`this my about`);
}
  res.end(`
  <h1> Oops!! </h1>
  <p> we couldn't find the page you are looking for </p>
  <a href = "/"> back home </a>`)
})

server.listen(4000) //server suffix
