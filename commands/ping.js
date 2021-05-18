const { MessageEmbed } = require('discord.js');
const config = require('../config.json')

module.exports.config = { 
    name: 'ping',
    aliases: ['ms','gecikme']
}

module.exports.sex = async(client, message, args) => {

message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - Ping: ${client.ws.ping}ms`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};

