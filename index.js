// old modules
const http = require('http');
const fs = require('fs');
const url = require('url');

// create ownModule
const replaceTemplate = require('./owmmodules/replaceTemplate')

// read api data
// why use syncronous cuz that read one time
const apiData = fs.readFileSync(`${__dirname}/dev-data/products.json`, "utf-8");
const dataObj = JSON.parse(apiData);

// read template
const template = fs.readFileSync(`${__dirname}/template/index.html`, "utf-8");

const templateCard = fs.readFileSync(`${__dirname}/template/card.html`, "utf-8")

const singleProductTemp = fs.readFileSync(`${__dirname}/template/singlePage.html`, "utf-8");

// replaceTemplate(temp, repVal);

const server = http.createServer((req, res) => {
  // const pathName = req.url; //url yuu pay tr

  const {query, pathname} = (url.parse(req.url, true)); //parse = pass , need true;
  if (pathname === '/' || pathname === '/home') {
    res.writeHead(200, {
      "Content-type": "text/html"
    })
    const cardHtml = dataObj.map(el => replaceTemplate(templateCard, el)).join(''); //join('') = change array to string
    
    const output = template.replace(/{%cards%}/g, cardHtml);
    res.end(output);

    
  } else if (pathname === '/api') {
    
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(apiData);
  } else if (pathname === '/product') {
    res.writeHead(200, {
      "Content-type": "text/html"
    })

    const singleData = dataObj[query.id]
    const output = replaceTemplate(singleProductTemp, singleData)
    res.end(output)
  }else {
    res.writeHead(404, {
      "Content-type": "text/html",
    })
    res.end("<h1>404 not found!</h1>")
  }
  
});

server.listen(3000, '127.0.0.1', () => {
  console.log("server is running and request listening...")
});