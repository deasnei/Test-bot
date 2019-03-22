const Discord = require("discord.js")
const fs = require('fs')
const client = new Discord.Client()
 
let prefix = "+"
 
const warns = JSON.parse(fs.readFileSync('./warns.json'))
 
client.login("NTU3OTQ3MzQ5NDA2ODQyODkw.D3PxKg.eAcX6maPcDKhHx3-zUudYb7EcVk")

client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC0000")
        .setTitle("Voici mes commandes !")
        .setDescription("ceci sont mes commandes :")
        .setThumbnail(message.author.avatarURL)
        .addField("Warn" , "Pour mettre une sanction")
        .addField("Infractions" , "Vous permez de vous les sanctions de la personne")
        .addField("Ban" , "Pour Ban un membre")
        .addField("Mute" , "Si tu as besoin de mute fait *mute")
        .setTimestamp()
        message.channel.send(help_embed);
    }

})
