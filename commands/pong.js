const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pong')
        .setDescription('Responde com Ping!'),
    async execute(interaction) {
        await interaction.reply('Ping!');
    },
};