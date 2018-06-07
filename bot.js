const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");

// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }


if (message.content.startsWith(prefix + "available")) {
    if(guild1.available) {
        message.channel.send("Yes");
    } else {
        message.channel.send("No");
    }
  }

  if (message.content.startsWith(prefix + "name")) {
    message.channel.send(message.guild.name);
  }

    if (message.content.startsWith(prefix + "roles")) {
        console.log(message.guild.roles);
       var ts = Math.round((new Date()).getTime());
       console.log(ts);  //get current unix timestamp
    //var guildMembers = message.guild.fetchMembers().then(console.log).catch(console.error);

     //message.channel.send(guildMembers);

     //list.members.forEach(member => console.log(member.user.username)); 

     message.guild.members.forEach(member => {
        //console.log(member.joinedAt);
        console.log(member.joinedTimestamp);
        if((ts - member.joinedTimestamp) < 86400000 ) {
            //noob role id: 454007803284160512
            console.log("Noob");
            message.member.addRole('454007803284160512')
              .then(console.log)
              .catch(console.error);
        } else if((ts - member.joinedTimestamp) < 259200000 ) {
            //1 day role id: 454007858431000598
         console.log("1 day");
         member.addRole('454007858431000598')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 259200000 ) {
            //3 day role id - 454008941957873674
        console.log("3 day");
        member.addRole('454008941957873674')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 604800000 ) {
            //1 week role id - 454007902831640607
        console.log("1 week");
        message.member.addRole('454007902831640607')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 1209600000 ) {
            //2 week role id - 454008796759719980
        console.log("2 weeks");
        member.addRole('454008796759719980')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 2629743000 ) {
            //1 month role id - 454007935165661194
        console.log("1 month");
        member.addRole('454007935165661194')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 5259486000 ) {
            //2 months role id - 454007966924800000
        console.log("2 months");
          member.addRole('454007966924800000')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 7889229000 ) {
            //3 months role id - 454007987456180234
        console.log("3 months");
        member.addRole('454007987456180234')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 10518972000 ) {
            //4 months role id - 454009180056190987
        console.log("4 months");
           member.addRole('454009180056190987')
              .then(console.log)
              .catch(console.error);


        } else if((ts - member.joinedTimestamp) < 13148715000 ) {
            //5 months role id - 454009040582868995
        console.log("5 months");
        member.addRole('454009040582868995')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 15778458000 ) {
            //6 months role id - 454008008381562890
        console.log("6 months");
                member.addRole('454008008381562890')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 21037944000 ) {
            //8 months role id - 454009305407029249
        console.log("8 months");
                        member.addRole('454009305407029249')
              .then(console.log)
              .catch(console.error);


        } else if((ts - member.joinedTimestamp) < 26297430000 ) {
            //10 months role id - 454009355059331074
        console.log("10 months");
                                member.addRole('454009355059331074')
              .then(console.log)
              .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 31556926000 ) {
            //1 years role id - 454008035631693824
        console.log("1 years");
                                        member.addRole('454008035631693824')
              .then(console.log)
              .catch(console.error);


        } else if((ts - member.joinedTimestamp) < 63113852000 ) {
            //2 year role id - 454008088312414228
        console.log("2 years");
                                                member.addRole('454008088312414228')
              .then(console.log)
              .catch(console.error);

        } 





        else {
        console.log("Broken");

        } 

        });

  }
});


client.login(config.token);