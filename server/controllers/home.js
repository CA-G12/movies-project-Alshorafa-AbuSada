const path = require('path');
const fetch = require('node-fetch');


const home = (req,res) => {
    res.sendFile(path.join(__dirname,"..","..","client","html","home.html"));
}

const getData = async(req,res)=>{

    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/Lux.json`)
    const body = await response.json();
    res.json(body)
    }

module.exports = {home, getData}