const Discord = require("discord.js")
const config = require('../config.json')
const client = new Discord.Client();

module.exports.run = (bot, message, args) => {
	
var servindo = new Discord.RichEmbed()
.setTitle("💈 MINHAS ESTASTÍTICAS 💈\n\n")
.setColor("#36383f")
.setDescription(`☛ **${bot.guilds.array().length}** Grupos \n☛ **${bot.users.array().length}** Membros\n☛ **${bot.channels.array().length}** Canais de Texto / Voz.\n\n`)
.setFooter(`${config.nome_bot}`,bot.user.displayAvatarURL)
.setTimestamp();
  

message.channel.sendEmbed(servindo)

}

module.exports.help = {
  name: "lista"
} 
