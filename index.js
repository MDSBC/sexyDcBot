const fetch = require('node-fetch');
const fs = require('fs');
const { Client, Intents, Collection } =  require("discord.js")
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles =  fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
  const command =  require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once('ready', () => {
  console.log('Online!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);
  if (!command) {
    return;
  }
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Ocorreu um erro na execução', ephemeral: true })
  }

});

client.login(token);