const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  let bicon = client.user.displayAvatarURL;
    
 let HelpEmbed = new Discord.RichEmbed()
 .setTitle(`Confira aqui meus comandos`)
 .setDescription(`Quer me adicionar em seu servidor? [Click Aqui](${config.link_bot})`)
 .setColor("RANDOM")
 .setThumbnail(bicon)
 .addField(`⚙️ | Comandos de divulgação,`, `${config.prefix}**avisar**`)
 .addField(`🤖 | Comandos de latência ,`, `${config.prefix}**ping**`)
 .addField(`🔨 | Outros comandos,`, `${config.prefix}**convite**`)
 .setFooter("help por | " + message.author.tag, message.author.avatarURL);
 message.channel.send(HelpEmbed).then(msg => msg.delete(40000));

        message.delete();


}
      module.exports.help = {
        name: "Help"
      }