const Discord = require("discord.js")
const fs = require('fs')
const client = new Discord.Client()
 
let prefix = "+"
 
const warns = JSON.parse(fs.readFileSync('./warns.json'))
 
client.login("NTU3OTQ3MzQ5NDA2ODQyODkw.D3PxKg.eAcX6maPcDKhHx3-zUudYb7EcVk")

