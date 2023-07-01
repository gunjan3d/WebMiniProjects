/* 
1. Use the inquirer npm package to get user input.*/
import inquirer from 'inquirer';
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.
// */
import qr from "qr-image";
import fs from "fs"
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            "message": "Enter Your url",
            name: "URL"
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image( url);
        qr_svg.pipe(fs.createWriteStream('image.png'));
        fs.writeFile("Links.text",url,(err)=>{
            if(err) throw err;
            console.log("message saved");
        });
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
