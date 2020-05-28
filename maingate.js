const Discord = require('discord.js')
const bot = new Discord.Client();
const { prefix, token } = require('./config.json')

verision = "1.2"

 bot.on('ready', () =>{
    console.log('system running!')
    bot.user.setActivity("Green Bot||g!help", {type: 'WATCHING'})
 });


 const {Client, MessageEmbed, MessageAttachment} = require('discord.js')
 new Discord.MessageEmbed();
 
 //function(error) {
   //const embed = new MessageEmbed()
 //}

 

bot.on('message', message => {
  if(message.content === `${prefix}about`) {
    const embed = new MessageEmbed()
    .setTitle(`**About Bot**`)
    .setColor(10181046)
    .setDescription(`Green Gate Bot is a discord bot developed by Kaiga#8754 using Visual studio code and Node.js, you can find those links here:\nVS CODE: https://code.visualstudio.com/download\nNode.js: https://nodejs.org/en/download/\nCurrent version: ${verision}\nWant to see a feature added? https://docs.google.com/forms/d/e/1FAIpQLScx2X81GJ-Y4n758Rocd4hWXV5fQy8exs5LzTKTNH3NuX2kkw/viewform`)
    .setImage(`https://imgur.com/fPOITtf`,)
    message.author.send(embed);
    message.channel.send(`Sent you a private DM`);
    console.log(`Command Succesfully executed by ${message.author.username}`)
  }
});

bot.on('message', message =>{
  if(message.content === `${prefix}`) {
    message.channel.send(`You must enter a command behind that!`)
  }
});

bot.on('message', message =>{
  if(message.content === `${prefix}test`)
  message.channel.send()
});

bot.on('message', message =>{
  if(message.content === `${prefix}server`) {
    const embed = new MessageEmbed()
    .setTitle(`**Server Info:**`)
    .setColor(1752220)
    .setDescription(`Server Name: ${message.guild.name}\n Total Members: ${message.guild.memberCount}`)
    message.channel.send(embed).catch(err => console.log(`there was an error`))
    console.log(`Command Succesfully executed by ${message.author.username}`)
  }
});

//let myRole = message.guild.roles.get("713422636406800484");

//let myRole = message.guild.roles.find(role => role.name === "One Message...");

bot.on('message', message =>{
  if(message.content === `${prefix}serverlinks`) {
    const embed = new MessageEmbed()
    .setTitle(`Server Links`)
    .setColor(3514992)
    .setDescription(`Support Server:https://discord.gg/6Gk82QB`)
    message.author.send(embed);
    console.log(`succesfully executed by ${message.author.username}`);
    message.channel.send(`Sent you a private DM`)
  }
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome🖐');
  if (!channel) return;
  channel.send(`${member} Has entered the Inn! say hi!`);
});

bot.on('message', message => {
  if(message.content === `F`) {
    message.channel.send(`${message.author.username} Has payed thier respects.`)
  }
});

bot.on('message', message =>{
  if(message.content === `gay`) {
    message.channel.send({
      files: ['https://imgur.com/a/wFJFHLQ']
    })
  }
});



bot.on('message', message =>{
  if(message.content === `${prefix}botfaq`) {
    const embed = new MessageEmbed()
    .setTitle(`Bot F.A.Q`)
    .setColor(13615209)
    .setDescription(`Q: "Why Green Bot?"\nA: Because, I originally desigined this bot for a single server but then decided to go public!\nQ: "Any Future Plans?"\nA: Yes...`)
    message.author.send(embed)
  }
});

bot.login(token)

