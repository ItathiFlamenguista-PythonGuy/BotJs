const Discord = require("discord.js");
const client  = new Discord.Client();

const prefix   = "!";
const commands = require("./scripts/commandsReader")(prefix);

client.on("ready",()=>{
    console.log(`Logando com o bot ${client.user.tag}`);
});

client.on("message",(msg)=>{
    if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`);
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](client,msg);
    }
});

client.login('NjM5NTcyMTY0NDA3OTg0MTU5.Xu6yCA.NGW_BBoiboKnp8Db50EuoLqMIvI')
