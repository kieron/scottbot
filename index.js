//const fs = require('fs');
require("dotenv").config();
const Discord = require("discord.js");
const { prefix } = require("./config.json");
const token = process.env.TOKEN;
const client = new Discord.Client();
const swearWords = ["cunt", "fucking", "fuck", "shit"];
const AntiSpam = require("discord-anti-spam");
const antiSpam = new AntiSpam({
  warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
  kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
  banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
  maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
  warnMessage: "{@user}, Please stop spamming.", // Message that will be sent in chat upon warning a user.
  kickMessage: "**{user_tag}** has been kicked for spamming.", // Message that will be sent in chat upon kicking a user.
  banMessage: "**{user_tag}** has been banned for spamming.", // Message that will be sent in chat upon banning a user.
  maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
  exemptPermissions: ["ADMINISTRATOR"], // Bypass users with any of these permissions.
  ignoreBots: true, // Ignore bot messages.
  verbose: true, // Extended Logs from module.
  ignoredUsers: [], // Array of User IDs that get ignored.
  // And many more options... See the documentation.
});

client.on("ready", () => console.log(`Logged in as ${client.user.tag}.`));

client.on("message", (message) => antiSpam.message(message));

client.on("message", (message) => {
  if (swearWords.some((word) => message.content.includes(word))) {
    message.reply("Oh no you said a bad word!!!");
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "scott") {
    message.channel.send("Hiya lads");
  } else if (command === "ark") {
    message.reply("Ark is a great game tbf fella, mind if i join?");
  } else if (command === "jade") {
    message.reply("she's my good woman!");
  } else if (command === "coco") {
    message.reply("he's my boy!!!");
  } else if (command === "980") {
    message.reply("Community champion edition? Best gfx card of 2020 pal");
  } else if (command === "utm") {
    message.reply("up the bloody mariners!!!");
  } else if (command === "covid19") {
    message.reply("im self isolating!!");
  } else if (command === "roleplay") {
    message.reply("ill get my robe and wizard hat.");
  } else if (command === "son") {
    message.reply("God I love my son!");
  } else if (command === "milk") {
    message.reply("ill toss milk everywhere!!");
  } else if (command === "door") {
    message.reply("dont wind me up, ill kick the fucking door off!!");
  } else if (command === "coffee") {
    message.reply("ye please, but it best be bloody free!!!!");
  } else if (command === "weather") {
    message.reply("sorry, I cant do that yet.");
  } else if (command === "dice") {
    function randomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let expression = randomNumber(1, 6);
    switch (expression) {
      case 1:
        message.reply(`1`);
        break;
      case 2:
        message.reply(`2`);
        break;
      case 3:
        message.reply(`3`);
        break;
      case 4:
        message.reply(`4`);
        break;
      case 5:
        message.reply(`5`);
        break;
      case 5:
        message.reply(`6`);
        break;
      default:
      // code block
    }
  }
});

client.login(token);
