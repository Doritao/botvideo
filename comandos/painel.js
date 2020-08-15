const Discord = require("discord.js")
const config = require('../config.json')


module.exports.run = async (client, message, args) => {
if (message.author.id !== config.seu_id) return message.reply("❌ | **Você não possui permissão para usar esse comando.** ");
message.delete()
 
  let servidores = client.guilds.size
  let usuarios = client.users.size
 
  const embed = {
    "title": `**${config.nome_bot}**`,
    "description": `🔔 **Olá, eu sou o** __${config.nome_bot}__ **, um bot focado em anúncios e divulgação, estou aqui para te ajudar..**`,
    "color": 3080185,
    "footer": {
      "icon_url": `${config.foto_bot}`,
      "text": `${config.nome_bot}`
    },
    "thumbnail": {
      "url": `${config.foto_bot}`
    },
    "author": {
      "name": `${config.nome_bot}`,
      "url": `${config.link_bot}`,
      "icon_url": `${config.foto_bot}`
    },
    "fields": [
      {
        "name": "🔔  __**Aqui vai algumas informações:**__:",
        "value": `🔔 **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize**⠀${config.prefix}**ajuda**⠀e seja feliz!`
      },
      {
        "name": "⚙️ Configure as minhas permissões:",
        "value": "⚙️ **Ler mensagens, Escrever mensagens e Gerenciar mensagens**"
      },
      {
        "name": "➡️ Me adicione em seu servidor:",
        "value": `**->** [  **Clique aqui**](${config.link_bot}) ⚙️`
      },
      {
        "name": "⚙️ Comando",
        "value": `⚙️ Use ${config.prefix}**ajuda**   para saber mais. `,
        "inline": false
      },
      {
        "name": "_ _",
        "value": "_ _",
        "inline": false
      }
    ]
  };

  
 
const mensagem = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setDescription('**Olá, eu sou a ' + client.user.username + ', um bot de anúncios DM, divulgação, etc...**')
.setThumbnail(client.user.avatarURL)
.addField('<a:hype_wumpus:676557649516429343>> Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=649723758180827137&scope=bot&permissions=2146958847)**`)
.addField('**Configure minhas permissôes <a:istoistoisto:676558031844147200>**', `**Irei vir com meu cargos sem permissôes ! se você quiser me utilizar so pra anuncios coloque a permissão Ler e escrever mensagens!**`)
.addField('<a:hype_wumpus:676557649516429343>> Use y!!help para saber mais.', `**Bem Vindo(a) ao meus comandos <3, me utilize com sabedoria**`)
.setColor('#ff47ec')
.setFooter(message.member.username, message.member.avatarURL)
.setTimestamp();

client.users.forEach((f) => {f.send( {embed} )},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)
)}