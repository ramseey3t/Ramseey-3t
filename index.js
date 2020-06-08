const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

let clearValue;

client.on('ready', () => {
    client.user.setStatus('idle')
    client.user.setActivity('Assa Baing'); 
    console.log('démarage du cul de ta soeur !');
});

client.on('message', (message) => {
    if(message.member.roles.cache.find(r => r.id === '717748337587126323'))
    if(message.content == '!clean'&& message.member.roles.cache.find(r => r.id === '717748337587126323'))
    {
        message.channel.messages.fetch({ limit: clearValue}).then(messages => {
            message.channel.bulkDelete(messages
        )});
    }
});

client.on('message', msg => {
    if (msg.content === 'fdp') {
      msg.reply('je bz ta mère sans capote');
    }
  });

  client.on('message', (message) => {
    if(message.content.startsWith('!kick'))
    {
        if(message.member.roles.cache.find(r => r.id === '717748337587126323'))
        {
            var member = message.mentions.members.first();
            member.kick().then((member) =>
            {
                message.reply('Le membre **' + member.displayName + '** a été expulsé avec succès !');
            }).catch(() => {
                message.reply('Un problème est survenu !');
            });
        }
    }
});

client.on('message', (message) => {
    if(message.content.startsWith('!ban'))
    {
        if(message.member.roles.cache.find(r => r.id === '717748337587126323'))
        {
            var member = message.mentions.members.first();
            member.ban().then((member) =>
            {
                message.reply('Le membre **' + member.displayName + '** a été expulsé avec succès !');
            }).catch(() => {
                message.reply('Un problème est survenu !');
            });
        }
    }
});

client.on('message', (message) => {
    if(message.content === 'wsh')
    message.reply('wsh mon gas')
})

client.on('message', (message) => {
    if(message.content === 'enculer') {
        message.delete();
        message.reply('c est pas sympa')
    };
});
