
const {Client, Intents, Interaction} =  require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { token } = require('./assets/config.json');

client.once('ready', () => {
  console.log('Online!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.login(token);