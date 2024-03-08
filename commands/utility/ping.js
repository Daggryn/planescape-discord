const { SlashCommandBuilder } = require( "discord.js" );

module.exports = {
  data: new SlashCommandBuilder()
    .setName( 'ping' )
    .setDescription( 'Replies wiith Pong!' ),
  async execute ( interaction ) {
    await interaction.reply( 'Pong!' );
  },
};