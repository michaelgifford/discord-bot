const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");
const schedule = require('node-schedule');

//Roles
// **YOU'LL NEED THESE ROLES ON YOUR SERVER
var roleEveryone = '269890977005699084';
var roleCreator = '373697277962878976';
var roleAdmin = '374312041894117388';
var roleModerator = '374334969386106880';
var roleBots = '447540815661629451';

var roleNoob = '454007803284160512';
var role1Day = '454007858431000598';
var role3Day = '454008941957873674';
var role1Week = '454007902831640607';
var role2Week = '454008796759719980';
var role1Month = '454007935165661194';
var role2Month = '454007966924800000';
var role3Month = '454007987456180234';
var role4Month = '454009180056190987';
var role5Month = '454009040582868995';
var role6Month = '454008008381562890';
var role8Month = '454009305407029249';
var role10Month = '454009355059331074';
var role1Year = '454008035631693824';
var role2Year = '454008088312414228';


// Recurring Auto Time Roles
var rule = new schedule.RecurrenceRule();
rule.hour = 17;
rule.minute = 55;

var autoTimeRoles = schedule.scheduleJob(rule, function(){
  console.log('------------------------------------------------------');
  console.log('AUTO TIME ROLES BEGIN');
  var guild204 = client.guilds.get("GUILD ID HERE");
  console.log("Guild Name:" + guild204.name);
  console.log('------------------------------------------------------');


var ts = Math.round(Date.now()); // log time stamp
console.log("Current Unix Timestamp: " + ts);
console.log('-----------------------------------');

var chan204 = client.channels.get("CHANNEL ID HERE");

//console.log('Sending text in discord');
//chan204.send("Recurring Message test");
//chan204.send("Current timestamp" + ts);
//console.log('Text has been sent in discord');


guild204.members.forEach(member => {
        //console.log(member.joinedAt);
        console.log(member.displayName + " joined at " + member.joinedTimestamp);
        
        
        if((ts - member.joinedTimestamp) < 86400000 ) { // if less than 1 day give Noob Role
            //noob role id: 454007803284160512
            //member.removeRoles([role1Day, role3Day, role1Week, role2Week, role1Month, role2Month, role3Month, role4Month, role5Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(roleNoob)
            .then(console.log(member.displayName + " - Role Added: Noob"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 259200000 ) { // if less than 3 days give 1 Day Role
            //1 day role id: 454007858431000598
            //member.removeRoles([roleNoob, role3Day, role1Week, role2Week, role1Month, role2Month, role3Month, role4Month, role5Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role1Day)
            .then(console.log(member.displayName + " - Role Added: 1 day"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 604800000 ) { // if less than 1 week give 3 day role
            //3 day role id - 454008941957873674
            //member.removeRoles([roleNoob, role1Day, role1Week, role2Week, role1Month, role2Month, role3Month, role4Month, role5Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role3Day)
            .then(console.log(member.displayName + " - Role Added: 3 day"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 1209600000 ) { // if less than 2 weeks give 1 week role
            //1 week role id - 454007902831640607
           // member.removeRoles([roleNoob, role1Day, role3Day, role2Week, role1Month, role2Month, role3Month, role4Month, role5Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role1Week)
            .then(console.log(member.displayName + " - Role Added: 1 week"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 2628288000 ) { // if less than 1 month give 2 weeks role
            //2 week role id - 454008796759719980
            //member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role1Month, role2Month, role3Month, role4Month, role5Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role2Week)
            .then(console.log(member.displayName + " - Role Added: 2 weeks"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 5256576000 ) { // if less than 2 months give 1 month role
            //1 month role id - 454007935165661194
           // member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role2Month, role3Month, role4Month, role5Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role1Month)
            .then(console.log(member.displayName + " - Role Added: 1 month"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 7884864000 ) { // if less than 3 months give 2 months role
            //2 months role id - 454007966924800000
            //member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role1Month, role3Month, role4Month, role5Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role2Month)
            .then(console.log(member.displayName + " - Role Added: 2 months"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 10513152000 ) { // if less than 4 months give 3 months role
            //3 months role id - 454007987456180234
            //member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role1Month, role2Month, role4Month, role5Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role3Month)
            .then(console.log(member.displayName + " - Role Added: 3 months"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 13141440000 ) { // if less than 5 months give 4 months role
            //4 months role id - 454009180056190987
            //member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role1Month, role2Month, role3Month, role5Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role4Month)
            .then(console.log(member.displayName + " - Role Added: 4 months"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 15769728000 ) { // if less than 6 months give 5 months role
            //5 months role id - 454009040582868995
            //member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role1Month, role2Month, role3Month, role4Month, role6Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role5Month)
            .then(console.log(member.displayName + " - Role Added: 5 months"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 21026304000 ) { // if less than 8 months give 6 months role
            //6 months role id - 454008008381562890
           // member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role1Month, role2Month, role3Month, role4Month, role5Month, role8Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role6Month)
            .then(console.log(member.displayName + " - Role Added: 6 months"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 26282880000 ) { //if less than 10 months give 8 months role
            //8 months role id - 454009305407029249
            //member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role1Month, role2Month, role3Month, role4Month, role5Month, role6Month, role10Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role8Month)
            .then(console.log(member.displayName + " - Role Added: 8 months"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 31556952000 ) { // if less than 1 year give 10 months role
            //10 months role id - 454009355059331074
            //member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role1Month, role2Month, role3Month, role4Month, role5Month, role6Month, role8Month, role1Year, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role10Month)
            .then(console.log(member.displayName + " - Role Added: 10 months"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) < 63113904000 ) { // if less than 2 years give 1 year role
            //1 years role id - 454008035631693824
            //member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role1Month, role2Month, role3Month, role4Month, role5Month, role6Month, role8Month, role10Month, role2Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role1Year)
            .then(console.log(member.displayName + "- Role Added: 1 years"))
            .catch(console.error);
            console.log('-----------------------------------');

        } else if((ts - member.joinedTimestamp) >= 63113904000 ) { // if greater or equal to 2 years give 2 year role
            //2 year role id - 454008088312414228
            //member.removeRoles([roleNoob, role1Day, role3Day, role1Week, role2Week, role1Month, role2Month, role3Month, role4Month, role5Month, role6Month, role8Month, role10Month, role1Year]);
            console.log(member.displayName + " - Old Role Removed");
            member.addRole(role2Year)
            .then(console.log(member.displayName + " - Role Added: 2 years"))
            .catch(console.error);
            console.log('-----------------------------------');

          } else {
            console.log(member.displayName + " -- Broken");
          } 
        });  
    //chan204.send("Time roles daily update complete");
    console.log('---------------------------------------------------');
    console.log('AUTO TIME ROLES END');
    console.log('-------------------------------------------------------');

}); // End of recurring time roles

// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Start all commands with !");
    message.channel.send("The following are examples of commands:");
    message.channel.send("ping, foo, jahbby, bootybooty,  big husk, available, name, timestamp, myjointime, jointime (username)");
  }

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }

  if (message.content.startsWith(prefix + "jahbby")) {
    message.channel.send("Jahbby is greatest of all time. big husk.");
  }

  if (message.content.startsWith(prefix + "bootybooty")) {
    message.channel.send("booty booty eats pooty pooty");
  }

  if (message.content.startsWith(prefix + "big husk")) {
    message.channel.send("this is a very big husk")
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

  if (message.content.startsWith(prefix + "testlog")) {
    console.log(role1Day);
  }

  if (message.content.startsWith(prefix + "logRoles")) {
    console.log("PRINTING !logRoles");
    console.log("-----------------------");

    //console.log(message.guild.roles);

    message.guild.roles.forEach(role => {
      console.log(role.name);
      console.log(role.id);
      console.log("-----------------------");
    });
    console.log("PRINTING !logRoles DONE");
  }

  if (message.content.startsWith(prefix + "timestamp")) {
    message.channel.send(Date.now());
  }
  if (message.content.startsWith(prefix + "myjointime")) {
    joinLengthMS = (Math.round(Date.now()) - message.member.joinedTimestamp);
    joinLengthDays = joinLengthMS / 86400000;

    message.channel.send("User " + message.member.displayName + " joined on: " + message.member.joinedAt);
    message.channel.send("This was " + joinLengthDays.toFixed(2) + " Days ago");
    message.channel.send("ooga booga black magic");
  }

  if (message.content.startsWith(prefix + "jointime")) {
    message.guild.members.forEach(member => { 
        if(message.content.includes(member.displayName)) {
            joinLengthMS = (Math.round(Date.now()) - member.joinedTimestamp);
            joinLengthDays = joinLengthMS / 86400000;

            message.channel.send("User " + member.displayName + " joined on: " + member.joinedAt);
            message.channel.send("This was " + joinLengthDays.toFixed(2) + " Days ago");
            message.channel.send("ooga booga double black magic");
        }
    });
  }

  if (message.content.startsWith(prefix + "undoRoles")) {
    console.log("PRINTING !undoRoles");
    console.log("-----------------------");
    //console.log(message.guild.roles);
    message.guild.members.forEach(member => {
    member.removeRoles(['454007803284160512', '454007858431000598', '454007902831640607', '454007935165661194', '454007966924800000', '454007987456180234', '454008008381562890', '454008035631693824', '454008088312414228', '454008796759719980', '454008941957873674', '454009040582868995', '454009180056190987', '454009305407029249', '454009355059331074']);
    console.log(member.displayName + "Role Removed");

   });
    console.log("PRINTING !undoRoles DONE");
  }


  if (message.content.startsWith(prefix + "roles")) {
    console.log(message.guild.roles);
    var ts = Math.round(Date.now());
       console.log("Current Unix Timestamp" + ts);  //get current unix timestamp
    //var guildMembers = message.guild.fetchMembers().then(console.log).catch(console.error);
     //message.channel.send(guildMembers);
     //list.members.forEach(member => console.log(member.user.username)); 

     message.guild.members.forEach(member => {
        //console.log(member.joinedAt);
        console.log(member.joinedTimestamp);
        if((ts - member.joinedTimestamp) < 86400000 ) { // if less than 1 day
            //noob role id: 454007803284160512
            console.log(member.displayName + "Role Added: Noob");
            member.addRole('454007803284160512')
            .then(console.log)
            .catch(console.error);
        } else if((ts - member.joinedTimestamp) < 259200000 ) { // if less than 3 days
            //1 day role id: 454007858431000598
            console.log(member.displayName + "Role Added: 1 day");
            member.addRole('454007858431000598')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 604800000 ) { // if less than 1 week
            //3 day role id - 454008941957873674
            console.log(member.displayName + "Role Added: 3 day");
            member.addRole('454008941957873674')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 1209600000 ) { // if less than 2 weeks
            //1 week role id - 454007902831640607
            console.log(member.displayName + "Role Added: 1 week");
            member.addRole('454007902831640607')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 2628288000 ) { // if less than 1 month
            //2 week role id - 454008796759719980
            console.log(member.displayName + "Role Added: 2 weeks");
            member.addRole('454008796759719980')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 5256576000 ) { // if less than 2 months
            //1 month role id - 454007935165661194
            console.log(member.displayName + "Role Added: 1 month");
            member.addRole('454007935165661194')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 7884864000 ) { // if less than 3 months
            //2 months role id - 454007966924800000
            console.log(member.displayName + "Role Added: 2 months");
            member.addRole('454007966924800000')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 10513152000 ) { // if less than 4 months
            //3 months role id - 454007987456180234
            console.log(member.displayName + "Role Added: 3 months");
            member.addRole('454007987456180234')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 13141440000 ) { // if less than 5 months
            //4 months role id - 454009180056190987
            console.log(member.displayName + "Role Added: 4 months");
            member.addRole('454009180056190987')
            .then(console.log)
            .catch(console.error);


        } else if((ts - member.joinedTimestamp) < 15769728000 ) { // if less than 6 months
            //5 months role id - 454009040582868995
            console.log(member.displayName + "Role Added: 5 months");
            member.addRole('454009040582868995')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 21026304000 ) { // if less than 8 months
            //6 months role id - 454008008381562890
            console.log(member.displayName + "Role Added: 6 months");
            member.addRole('454008008381562890')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 26282880000 ) { //if less than 10 months
            //8 months role id - 454009305407029249
            console.log(member.displayName + "Role Added: 8 months");
            member.addRole('454009305407029249')
            .then(console.log)
            .catch(console.error);


        } else if((ts - member.joinedTimestamp) < 31556952000 ) { // if less than 1 year
            //10 months role id - 454009355059331074
            console.log(member.displayName + "Role Added: 10 months");
            member.addRole('454009355059331074')
            .then(console.log)
            .catch(console.error);

        } else if((ts - member.joinedTimestamp) < 63113904000 ) { // if less than 2 years 
            //1 years role id - 454008035631693824
            console.log(member.displayName + "Role Added: 1 years");
            member.addRole('454008035631693824')
            .then(console.log)
            .catch(console.error);


        } else if((ts - member.joinedTimestamp) >= 63113904000 ) { // if greater or equal to 2 years
            //2 year role id - 454008088312414228
            console.log(member.displayName + "Role Added: 2 years");
            member.addRole('454008088312414228')
            .then(console.log)
            .catch(console.error);

          } else {
            console.log(member.displayName + "-- Broken");
          } 
        });
}
});

client.login(config.token);