const core = require("@actions/core");
const path = require('path');
const fs = require("fs");

//Declaration of variables
const readmePath = path.resolve('./README.md');
const resultado_tests = core.getInput("resultado_test");
const URL= "https://api.memegen.link/images/img.png";

const MemeNegativo= URL.replace("img", core.getInput("frase_positiva"));
const MemePositivo= URL.replace("img", core.getInput("frase_negativa"));

//Add line img meme
var msg_output = resultado_tests == "success" ? "README modificado Meme Positivo" : "README modificado Meme Negativo";
var AddMeme = resultado_tests == "success" ? MemePositivo : MemeNegativo;
var url_img= "![Meme Test](" + AddMeme + ")";

//Change Readme
fs.readFile(readmePath, 'utf8', function(err, data) {
    if (err) throw err;
    data += url_img;
    fs.writeFile(readmePath, data, function(err) {
        if (err) throw err;
        console.log("Readme Modificado correctamente");
        core.setOutput('msg', msg_output);
        process.exit(0)
    });
});