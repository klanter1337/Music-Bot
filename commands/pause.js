const { MessageEmbed } = require("discord.js");

module.exports.config = { 
    name: 'pause',
    aliases: ['duraklat']
}

module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla aynı kanalda olmalısın!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
if (!message.member.voice.channel) return message.channel.send( new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Lütfen bir sesli kanala girin!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send( new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Durdurmak için bir şarklı ekleyin!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
client.player.pause(message);

message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - ${client.player.getQueue(message).playing.title} isimli şarkı başarıyla durduruldu!`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};

