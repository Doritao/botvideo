const Discord = require("discord.js")
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
if (message.author.id !== config.seu_id) return message.reply("<❌ | você não possui permissão para usar esse comando.");
message.delete()
 
let mensagem = args.join(" ")
let servidores = client.guilds.size
let usuarios = client.users.size
 
message.channel.send(`🕗 **${message.author} Sua mensagem está sendo enviada para __${usuarios}__ Usuários , em __${servidores}__ Servidores :P ** 🕗 `)
console.log(`[BOT] Mensagem gatilho detectada`)
client.users.forEach((f)   => {
    f.send(mensagem).then(() => {
        console.log(`[BOT] Mensagem enviada para ${f.tag}`);

    }).catch(() => {
            console.log(`[BOT] Não foi possível enviar mensagem para ${f.tag}`);
    });
});
}