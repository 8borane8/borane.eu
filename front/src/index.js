const { Slick } = require("@borane/slick");

if(process.argv.includes("--dev"))
    process.env.API_BASE_URL = "http://127.0.0.1:5050";
else
    process.env.API_BASE_URL = "https://api.borane.eu";

new Slick({
    workspace: __dirname,

    development: process.argv.includes("--dev")
});