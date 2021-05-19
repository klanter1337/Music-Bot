const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'ping',
    aliases: ['ms','gecikme']
}

module.exports.sex = async(client, message, args, config) => {

message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - Ping: ${client.ws.ping}ms`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};

