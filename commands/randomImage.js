const { SlashCommandBuilder } = require('@discordjs/builders');
const { fetchJson, getBuffer } = require('./lib/fetcher')
const leyAPI = '23b58ac9e4800fdfd0808721'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rmimage')
		.setDescription('A random image.'),
	async execute(interaction) {
		await interaction.reply(`https://picsum.photos/300/300`);
	},
};