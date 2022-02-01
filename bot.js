const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const token = process.env['token']

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'bot') {
    await interaction.reply('Yo how can I help?');
  } else if (interaction.commandName === 'rickroll') {
    await interaction.reply('https://www.youtube.com/watch?v=iik25wqIuFo'); }
     } else if (interaction.commandName === 'motivation') {
    await interaction.reply('https://www.youtube.com/watch?v=rg6CiPI6h2g'); }
});

client.login(token);