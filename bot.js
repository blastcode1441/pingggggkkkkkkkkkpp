const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-"



console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

console.log(' [Wait please .. ] ')

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

client.on('ready', () => {

	console.log('')

	console.log('')

	console.log('')

	console.log('')

	console.log('')

	console.log('')

	console.log('')

	console.log('')

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log(`Logged in as [ ${client.user.tag}! ]`);

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log('[ BOT IS ONLINE ]')

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log('[ info ]')

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log(`channels! [ " ${client.channels.size} " ]`);

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

});

 const devs = ['389090790984515594','337629134371160065'];

const adminprefix = "-"




client.on("ready", () => {

    client.user.setPresence({ game: { name: `Ping Development }, type: 0 });

    console.log("BOT ONLINE");

});


const code = '-';

client.on('message',async message => {

    if(message.content.startsWith(code + "js")) {

  if(!message.channel.guild) return message.reply(' ');

    let rank = message.guild.member(message.author).roles.find('name', '⇒ Support');

    if (!rank) return message.channel.send(':octagonal_sign: **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');

    let jscodes = message.guild.channels.find('name', "code-js");

    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");

      let filter = m => m.author.id === message.author.id;

      let thisMessage;

      let thisFalse;

      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {

  

      message.channel.awaitMessages(filter, {

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        collected.first().delete();

        thisMessage = collected.first().content;

        let boi;

        msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {

  

            message.channel.awaitMessages(filter, {

              max: 1,

              time: 90000,

              errors: ['time']

            })

            .then(collected => {

              collected.first().delete();

              boi = collected.first().content;

              let boi2;

              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {

  

                message.channel.awaitMessages(filter, {

                  max: 1,

                  time: 90000,

                  errors: ['time']

                })

                .then(collected => {

                  collected.first().delete();

                boi2 = collected.first().content;

        msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

          max: 1,

          time: 90000,

          errors: ['time']

        })

        .then(collected => {

          if(collected.first().content === 'لا') {

            msg.delete();

            message.delete();

            thisFalse = false;

          }

          if(collected.first().content === 'نعم') {

            if(thisFalse === false) return;

            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');

            collected.first().delete();

            jscodes.send(`@everyone | @here

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

**Ping Development© :arrow_down:** 

\`\`\`js

${thisMessage}\`\`\`

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

**وصف الكود**: ${boi}

**تم النشر بواسطة**: ${message.author}

**المصدر / الشخص الذي صنع الكود**: ${boi2}`); 

          }

        }

    );

});

      });

    }

      );

    });

}

);

      })}});


      
client.on('message',async message => {

    if(message.content.startsWith(code + "py")) {

  if(!message.channel.guild) return message.reply(' ');

    let rank = message.guild.member(message.author).roles.find('name', '- Support');

    if (!rank) return message.channel.send(':octagonal_sign: **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');

    let jscodes = message.guild.channels.find(`name`, "code-py");

    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");

      let filter = m => m.author.id === message.author.id;

      let thisMessage;

      let thisFalse;

      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {

  

      message.channel.awaitMessages(filter, {

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        collected.first().delete();

        thisMessage = collected.first().content;

        let boi;

        msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {

  

            message.channel.awaitMessages(filter, {

              max: 1,

              time: 90000,

              errors: ['time']

            })

            .then(collected => {

              collected.first().delete();

              boi = collected.first().content;

              let boi2;

              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {

  

                message.channel.awaitMessages(filter, {

                  max: 1,

                  time: 90000,

                  errors: ['time']

                })

                .then(collected => {

                  collected.first().delete();

                boi2 = collected.first().content;

        msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

          max: 1,

          time: 90000,

          errors: ['time']

        })

        .then(collected => {

          if(collected.first().content === 'لا') {

            msg.delete();

            message.delete();

            thisFalse = false;

          }

          if(collected.first().content === 'نعم') {

            if(thisFalse === false) return;

            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');

            collected.first().delete();

            jscodes.send(`@everyone | @here

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

**Ping Development© :arrow_down:** 

\`\`\`py

${thisMessage}\`\`\`

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

**وصف الكود**: ${boi}

**تم النشر بواسطة**: ${message.author}

**المصدر / الشخص الذي صنع الكود**: ${boi2}`); 

          }

        }

    );

});

      });

    }

      );

    });

}

);

      })}});


    client.on('message',async message => {

    if(message.content.startsWith(code + "html")) {

  if(!message.channel.guild) return message.reply(' ');

    let rank = message.guild.member(message.author).roles.find('name', '- Support');

    if (!rank) return message.channel.send(':octagonal_sign: **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');

    let jscodes = message.guild.channels.find(`name`, "code-html");

    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");

      let filter = m => m.author.id === message.author.id;

      let thisMessage;

      let thisFalse;

      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {

  

      message.channel.awaitMessages(filter, {

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        collected.first().delete();

        thisMessage = collected.first().content;

        let boi;

        msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {

  

            message.channel.awaitMessages(filter, {

              max: 1,

              time: 90000,

              errors: ['time']

            })

            .then(collected => {

              collected.first().delete();

              boi = collected.first().content;

              let boi2;

              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {

  

                message.channel.awaitMessages(filter, {

                  max: 1,

                  time: 90000,

                  errors: ['time']

                })

                .then(collected => {

                  collected.first().delete();

                boi2 = collected.first().content;

        msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

          max: 1,

          time: 90000,

          errors: ['time']

        })

        .then(collected => {

          if(collected.first().content === 'لا') {

            msg.delete();

            message.delete();

            thisFalse = false;

          }

          if(collected.first().content === 'نعم') {

            if(thisFalse === false) return;

            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');

            collected.first().delete();

            jscodes.send(`@everyone | @here

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

**Ping Development© :arrow_down:** 

\`\`\`html

${thisMessage}\`\`\`

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

**وصف الكود**: ${boi}

**تم النشر بواسطة**: ${message.author}

**المصدر / الشخص الذي صنع الكود**: ${boi2}`); 

          }

        }

    );

});

      });

    }

      );

    });

}

);

      })}});



const ytdl = require('ytdl-core');

const request = require('request');

const Canvas = require("canvas");

const fs = require("fs");

const jimp = require("jimp");

const moment = require("moment")


 

client.on('message', message => {

              if(!message.channel.guild) return;

    var prefix = "-";

    if(message.content.startsWith(prefix + 'bc')) {

    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

    let copy = "Ping Development";

    let request = `Requested By ${message.author.username}`;

    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {

    msg.react('✅')

    .then(() => msg.react('❌'))

    .then(() =>msg.react('✅'))


    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;


    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

    reaction1.on("collect", r => {

message.channel.send(`**__عضو__ ${message.guild.members.size} تم ارسال البروكسدات الى | ☑ **`).then(m => m.delete(5000));

    message.guild.members.forEach(m => {

    var bc = new

       Discord.RichEmbed()

       .setColor('RANDOM')

       .setTitle('Broadcast')

       .addField(':copyright: السيرفر', message.guild.name)

       .addField(':loudspeaker: ارسلها', message.author.username)

       .addField(':mailbox: الرسالة', args)

       .setThumbnail(message.author.avatarURL)

       .setFooter(copy, client.user.avatarURL);

    m.send({ embed: bc })

    msg.delete();

    })

    })

    reaction2.on("collect", r => {

    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));

    msg.delete();

    })

    })

    }

    });
client.on('message', async message =>{


  let messageArray = message.content.split(" ");

  let cmd = messageArray[0];

  let args = messageArray.slice(1);

  let prefix = '-';

  let sicon = message.author.displayAvatarURL;

  if(cmd === `${prefix}help`) {

      var bots = new Discord.RichEmbed()


      .setDescription(`** 


  ____  _             
 |  _ \(_)_ __   __ _ 
 | |_) | | '_ \ / _` |
 |  __/| | | | | (_| |
 |_|   |_|_| |_|\__, |
                |___/ 


_─══════ {✯Ping Development✯} ══════─_

__الاوامرالخاصة__:spy::skin-tone-1: 

\`\`-js\`\` | نشر اكواد جافا سكريبت

\`\`-py\`\` | نشر اكواد بايثون

\`\`-html\`\` | نشر اكواد اتشتيامل

\`\`-تقديم\`\` |

\`\-قبول\`\` |

\`\`-رفض\`\` |


∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞

__اوامر صاحب البوت__:cherry_blossom: 

\`\`-bc\`\`| امر البرودكاست

_─══════ {✯Ping Development✯} ══════─_

**`)

      .setColor('RANDOM')

      message.channel.send(bots);

  }

});



client.on('message', message => {

if (message.content === "-help") {

message.react("✅")


}

});



client.on('message', message => {

if (message.content === "-help") {

message.react("📩")


}

});

client.on('message', async rokz => {

    if(rokz.content.startsWith(prefix + "تقديم")) {

      let lang = '';

      let time = '';

      let expe = '';

      let fillter = m => m.author.id === rokz.author.id

      await rokz.channel.send("ما لغتك ؟").then(e => {

     rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {

       lang = co.first().content;

        co.first().delete();


       e.edit(`خبرتك

[${lang}]`)

       rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })

       .then(col => {

         time = col.first().content;

          col.first().delete();


            e.edit(`فرق بين const and var

[${time}]

[${lang}]`)

            rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })

            .then(coll => {

              expe = coll.first().content;

               coll.first().delete();


               e.edit(`جاري تقديمك...

[${expe}]

[${time}]

[${lang}]`)

              let rokzz = rokz.guild.channels.find("name","submissions")

              setTimeout(() => {

                e.edit("تم التقديم")

              }, 3000)

              rokzz.send(`

تقديم من ${rokz.author}

اللغه:

\`${lang}\`

المده:

\`${time}\`

الخبره:

\`${expe}\`

`).then(rokzzz => {

                  rokzzz.react("✅")

                  rokzzz.react("❌")

                })

            })

       })

     })

   })

    }

  })

 

    

    client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('502796059966439424');

if(message.content.startsWith(prefix + "رفض")) {

if(message.guild.id !== '502772079347630081') return;

 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");


var embed = new Discord.RichEmbed()

.addField('» تم رفض', `${mention}`,true)

.addField('» بواسطة', `${message.author}`,true)

Room.send(embed);

}

});

  client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('502796059966439424');

if(message.content.startsWith(prefix + "قبول")) {

if(message.guild.id !== '502772079347630081') return;

 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");


var embed = new Discord.RichEmbed()

.addField('» تم قبول', `${mention}`,true)

.addField('» بواسطة', `${message.author}`,true)

Room.send(embed);

}

});

    










client.login(process.env.BOT_TOKEN);
