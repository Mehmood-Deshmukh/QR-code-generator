import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";
inquirer
  .prompt([
    {name:"URL",
    message:"Enter Your URL"}
  ])
  .then((answers) => {

    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));


    fs.writeFile("URL.txt", url,(err) => {
        if (err) throw err;
        console.log("The QR Code has been Generated!");
      });

  });
