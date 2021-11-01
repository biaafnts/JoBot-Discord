const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const config = require("../config.json");
const fs = require("fs");
client.commands = new Collection()

client.login(config.token);

const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

fs.readdirSync("./src/commands").forEach(folder => {
  fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('js')).forEach(file => {
    const command = require(`./commands/${folder}/${file}`)
    client.commands.set(command.name, command)
  })
})

function connectDiscord() {
  for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }  
}

module.exports = {
  connectDiscord,
};