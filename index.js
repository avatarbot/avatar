const Discord = require('discord.js');
const client = new Discord.Client ();
var prefix = "?";
var bot = new Discord.Client ();
var Client = new Discord.Client ();


bot.login('NjIyMzI4NTU4NjY4MzQ5NDYw.XXzW6g.d3xXslyZz7JVZnoHuyqfHlayF5U');


client.on('ready', function () {
    console.log('Bot connecté')
    client.user.setActivity('a SerenityEsport', {type: "WATCHING"})
});


client.on('ready', function () {
    console.log('Bot connecté')
    client.user.setActivity('à être développé par Serenity_Thomas#4399', {type: "PLAYING"})
});
 
client.on('ready', function () {
    console.log('Bot connecté')
    client.user.setActivity('être en pose', {type: "PLAYING"})
});

bot.on('message', message => {
    if (message.content.startsWith("?ban")) {
        if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
            if (message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
                var utoban = message.mentions.users.first()
                if (!utoban) {
                    var h_embed = new Discord.RichEmbed()
                        .setTitle("Aide : ?ban")
                        .setDescription("_ _")
                        .setThumbnail("https://i.imgur.com/O3DHIA5.gif")
                        .addField("Aide : x!ban", "Bannir un utilisateur du serveur.\nExemple : x!ban @Draco1544#8582\n\nRequiert la permission **BAN_MEMBERS**")
                    message.channel.sendEmbed(h_embed)
                } else {
                        if (message.guild.member(utoban).bannable) {
                            message.guild.member(utoban).ban()
                            message.reply("Cet utilisateur ("+utoban.tag+") a été banni avec succès.")
                        } else {
                            message.reply("Je ne peux pas bannir cet utilisateur.")
                    }
                }
            } else {
                message.reply("Il me faut la permission __**BAN_MEMBERS**__ pour faire cela.")
            }
        } else {
            message.reply("Il te faut la permission __**BAN_MEMBERS**__ pour faire cela.")
        }
    }
})

bot.on('message', message => {
    if (message.content.startsWith("?kick")) {
        if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
            if (message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                var utokick = message.mentions.users.first()
                if (!utokick) {
                    var h_embed = new Discord.RichEmbed()
                        .setTitle("Aide : x!kick")
                        .setDescription("_ _")
                        .setThumbnail("https://i.imgur.com/O3DHIA5.gif")
                        .addField("Aide : ?ban", "Kick une persone sur le serveur \nExemple : ?kick @Draco1544#8582\n\nRequiert la permission **KICK_MEMBERS**")
                    message.channel.sendEmbed(h_embed)
                } else {
                        if (message.guild.member(utokick).kickable) {
                            message.guild.member(utokick).kick()
                            message.reply("Cet utilisateur ("+utokick.tag+") a été kick avec succès.")
                        } else {
                            message.reply("Je ne peux pas kick cet utilisateur.")
                    }
                }
            } else {
                message.reply("Il me faut la permission __**KICK_MEMBERS**__ pour faire cela.")
            }
        } else {
            message.reply("Il te faut la permission __**KICK_MEMBERS**__ pour faire cela.")
        }
    }
})

bot.on('message', message => {
    if (message.content === '?ping') {
      console.log("PING")
      message.channel.send('Ping du bot : **'+Math.round(bot.ping)+"ms**")
    }
  })

  bot.on('message', message => {
    if(message.content.startsWith("?say")) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  bot.on('message', message => {
    if(message.content.startsWith("?mute")) {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
    let role = message.guild.roles.find(r => r.name === "Utilisateurs mutés");
    if(!role){
      try {

        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack)
      }
    }

    if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');

    await(toMute.addRole(role));
    message.channel.send("J'ai muté !");

    return;
  }


bot.on("guildCreate", guild => {
    console.log(`new serv : ${guild.name}, dirigé par ${guild.owner.user.username}`);
  });

  bot.on("guildMemberAdd", member => {
    member.guild.defaultChannel.send("Bienvenue " + member.user.username + " Sur le Serveur Serenity E-Sport !")
 });
  
 bot.on("guildMemberRemove", member => {
    member.guild.defaultChannel.send("Aurevoir: " + member.user.username + " de " + member.guild.name)
 });

 bot.on('message', message => {
  if(message.content.startsWith("?say")) {

    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  bot.on('message', msg => {

    var command = msg.content
    if(command.startsWith("?serverinfo")) {
        if (msg.guild) {
        var sowner = msg.guild.owner.user.username
        var otag = msg.guild.owner.user.discriminator
        var server_embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag)
        .setImage(msg.guild.iconURL)
        .setTitle(msg.guild.name)
        .setDescription("Informations du serveur " + msg.guild.name)
        .addField("nombre de membres", msg.guild.memberCount)
        .addField("nombre de channels", msg.guild.channels.size)
        .addField("nombre de rôles", msg.guild.roles.size)
        .addField("Fondateur", sowner + '#' + otag)
        .addField("Region", msg.guild.region)
        .addField("Nombre de roles", msg.guild.roles.size)
        .addField("_ _", "Icone du serveur")
        .setFooter("Serenity E-Sport", msg.author.avatarURL)
        msg.channel.send(server_embed)
        }
      }

})

bot.on('message', message => {

    if (message.content.startsWith("?sug")) {
        let suggestion = message.content.substr(10)
        if (!message.guild) return
        if (!suggestion) {
            message.react("❌")
            message.reply("merci de mettre une suggestion.")
        } else {
            message.react("✅")
            var sugg_embed = new Discord.RichEmbed()
                .setTitle("Nouvelle suggestion")
                .setDescription("Par "+message.author.tag)
                .setThumbnail(message.author.avatarURL)
                .addField("Suggestion : ", suggestion)
                .setFooter("Serveur : "+message.guild.name, message.guild.iconURL)
            bot.channels.find('id', '433911399425638400').sendEmbed(sugg_embed)
            .then(function (message) {
                message.react("❌")
                message.react("✅")
            })
        }
    }
})

bot.on('message', message => {
    if(message.content.startsWith("?userinfo")) {
      var memberavatar = message.author.avatarURL
      var membername = message.author.username
         var mentionned = message.mentions.users.first();
        var getvalueof;
        if(mentionned){
            var getvalueof = mentionned;
        } else {
            var getvalueof = message.author;
        }

        if(getvalueof.bot == true){
            checkbot = "L'utilisateur est un bot :robot:";
        } else {
            checkbot = "N'est pas un bot :no_entry: :robot:";
        }
        if(getvalueof.presence.status == 'online'){
          status = "En ligne"; 
        } else if (getvalueof.presence.status = 'dnd') {
          status = "Ne pas déranger"
          } else if (getvalueof.presence.status = 'idle') {
            status = "Inactif"
          } else if (getvalueof.presence.status = 'invisible') {
            status = "Offline"
          }

      message.channel.sendMessage({
          embed: {
            type: 'rich',
            description: '',
            fields: [{
              name: 'Pseudo',
              value: getvalueof.username,
              inline: false
            }, {
              name: 'User id',
              value: getvalueof.id,
              inline: false
            },{
              name: '#',
              value: getvalueof.discriminator,
              inline: false
    },{
              name: 'Status',
              value: status,
              inline: false
    },{
              name: 'Bot',
              value: checkbot,
              inline: false
    }],
          image: {
        url: getvalueof.avatarURL
          },
            color: 0xE46525,
            footer: {
              text: 'KoroBot',
              proxy_icon_url: ' '
            },

            author: {
              name: membername,
              icon_url: memberavatar,
              proxy_icon_url: ' '
            }
          }
    })
    }
    })


  })})})
