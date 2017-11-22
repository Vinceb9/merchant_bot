const auth = require('./auth.json');
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(auth.discord);



client.on('message', function (msg) {
    if (!msg.author.bot) {
        if (msg.content.substring(0, 1) == '!') {
            let args = msg.content.substring(1).split(' ');
            if (args.length > 0) {
                handleCommand(args[0], msg);
            }
        }
    }
});

function handleCommand(cmd, msg) {
    switch (cmd) {
        case 'help':
            onHelp(msg);
            break;
        default:
            break;
    }
}

function onHelp(msg){
    msg.reply('Type !guess and a number between 0 and 10 to play the guessing game.');
}