const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'play',
    aliases: ['oynat','çal','cal','p']
}

module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla aynı kanalda olmalısın!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
  
if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Şarkı açmak için lütfen herhangi bir ses kanalına girin!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!args[0]) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Lütfen bir şarkı ismi yazın!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

client.player.play(message, args.join(" "));

};
