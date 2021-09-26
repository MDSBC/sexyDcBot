const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('satania')
		.setDescription('Satania the best!'),
	async execute(interaction) {
		await interaction.reply('https://satania.moe/img/webp/satania_thumbsup.webp');
	},
};