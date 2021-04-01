const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const welcome = require('./welcome')

client.on('ready', () => {
    console.log('the client is ready!')

    client.user.setActivity('need staff? type !h')
    client.on('message', message => {

        const args = message.content.slice(config.prefix.langth).trim().split(/ +/)
        const command = args.shift().toLowerCase();
        const Arguments = args.join(" ")
        
        if(message.author.bot) return;
    
        if(command === `${config.prefix}h`)
        message.channel.send(`** <@&827310890604560424> ! ** 
        ** המשתמש ${message.author} צריך את עזרתכם ! **
        ** סיבה : ${Arguments} **
        ** נא לחכות בסבלנות לצוות שיגיע. **`)
    
        if(command === `${config.prefix}clear`)
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(`${Arguments}`)
                message.channel.send(`** ${Arguments} הודעות נמחקו ! **`)
            })
        }
    
        if(command === `${config.prefix}server`)
        client.guilds.cache.forEach((guild) => {
            message.channel.send(
                `** ${guild.name} has total ${guild.memberCount} members **`
            )
        })
    })

    welcome(client)
})

client.login(config.tokem)