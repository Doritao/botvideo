const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  
    const perm = new Discord.RichEmbed()
        .setColor("#ff3636")
        .setThumbnail("https://i.pinimg.com/originals/bd/df/d6/bddfd6e4434f42662b009295c9bab86e.gif")
        .addField(`❌ ┆${message.author.username}`, `Você não tem permissão para usar este comando!`)
        .addField(`❓┆Como consigo a permissão?`, `Você tem que o adicionar o cargo: "${config.tag_do_bot}" que ja foi criado na minha entrada no servidor, caso não tenha crie então uma tag com o nome ${config.tag_do_bot} e adicione a tag em você para poder usar o bot`)


    if (!message.member.roles.some(r=>[config.tag_do_bot].includes(r.name)) )
            return message.reply(perm);

  
        let dmGuild = message.guild;
        let msg = args.join(" ")

  
        if(!msg || msg.length <= 0) return message.author.send("Nenhuma mensagem especificada");
  

        dmGuild.members.forEach(member => {
                member.send(msg);
        });

    const membros = message.guild.memberCount;

    message.channel.send("*\`Mensagem enviada para\`\* ***`" + membros + "`*** *\`membros\`\*").then(msg => msg.delete(15000))
    message.channel.send("**`Mensagem a ser enviada:`\n**" + msg).then(msg => msg.delete(15000))
}