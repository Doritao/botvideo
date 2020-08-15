var discord = require('discord.js')
const config = require('../config.json')

exports.run = (client,message,args)=>{
    var embed = new discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setTitle('**Olá, eu sou o ' + client.user.username + ', um bot de anúncios DM e divulgação etc...⭐**')
        .setDescription(`Adicione-me em seu server! [Convite](https://discord.com/oauth2/authorize?client_id=${config.id_bot}&scope=bot&permissions=3198025)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.avatarURL)
        .setColor("5dadec")
        .setTimestamp()

    message.channel.send(embed)    
}