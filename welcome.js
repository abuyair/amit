module.exports = client => {
const channelid = '825472079393718272'

    client.on('guildMemberAdd', (member) => {
        console.log(member)

        const message = `** ברוכים הבאים לשרת <@${member.id}> ! מקווים שתהנה פה ! :partying_face: **`

        const channel = member.guild.channels.cache.get(channelid)
        channel.send(message)
    })
}