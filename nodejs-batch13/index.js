// const fs = require('fs');

// writeFile
// fs.writeFile('messages.txt', 'hello from NODEJS!', (err) => {
//   if(err) throw err;
//   console.log('This file has been saved!')
// });

//readFile
// fs.readFiles('./messages.txt', 'utf-8', (err, data) => {
//   if(err) throw err;
//   console.log(data);
// });



// import generateName from 'sillyname';
// import superHero, { randomSuperhero } from "superheroes";


// var sillyName = generateName();
// console.log(`My name is ${sillyName}!`);

// const name = superHero;
// const hero = randomSuperhero();
// console.log(`I am ${hero}`);

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {
      message: "Type in your URL",
      name: "URL",
    },
  ])
  .then((answer) => {
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-imghhn.png'));

    fs.writeFile('message.txt', data, (err) => {
      if(err) throw err;
      console.log('The file has been saved!')
    })
  })
  .catch((error) =>{
    if(error.isTtyError) {

    }else {

    }
  })

// import express from 'express';

// const app = express();

// const port = process.env.port || 2000;

// app.listen(port, () => {
//   console.log(`Running on Port ${port}`)
// })




