const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'help',
     aliases: ['yardım','komutlar']
 }
 
 module.exports.sex = async(client, message, args, config) => {

message.channel.send(new MessageEmbed().setAuthor(`${message.client.user.username}`, message.client.user.avatarURL).setColor('RANDOM')
.addField('Müzik Komutları',`

**${config.prefix}play <müzikismi>**: İstenilen şarkıyı çalar.
**${config.prefix}pause**: Şarkıyı durdurur.
**${config.prefix}resume**: Durdurulan şarkıyı devam ettirir.
**${config.prefix}loop**: Şarkıyı tekrardan oynatır.
**${config.prefix}skip**: Varsa listedeki diğer şarkılara geçer.
**${config.prefix}stop**: Şarkıyı durdurur. 
**${config.prefix}np**: o an çalan şarkıyı gösterir.
**${config.prefix}list**: Şarkıları gösterir.
**${config.prefix}mix**: Şarkıları karıştırır.
**${config.prefix}ping**: Botun gecikme süresini gösterir.
**Sunucunuza eklemek isterseniz:**[davet linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://i.pinimg.com/originals/05/4a/a3/054aa3421c22e0c9e04ada3082066a8d.gif")
.setImage("https://store.donanimhaber.com/82/a4/07/82a407694655485defae55c3367fa31e.gif"))

};
