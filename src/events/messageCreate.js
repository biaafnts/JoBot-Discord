const config = require('../../config.json')
module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.bot == true || message.channel.type === "dm") return;
        else if (!message.content.toLowerCase().startsWith(config.prefix)) return;

        const args = message.content.trim().slice(config.prefix.length).split(/ +/g);
        const command = args.shift().toLowerCase();
        
        const commandFile = message.client.commands.get(command)
        if(!commandFile) return

        try {
            commandFile.run(message.client, message, args);
        } catch (err) {
            message.reply('Algo de errado ocorreu ao usar esse comando.')
            console.error("Erro:" + err);
        }
    }
}