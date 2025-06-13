//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5DVW5kRUZFMkRIMWEzeDhabG5IU1Z0TU1MaVhaZHlJVlptcHp0UGoyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUx0UVhrUGxHZHZkQlFQSnIvUm90QjNZUjlnVGFGNElINUJ4bnRYMUVHcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUG9XU2FYVldhMlB6ZFNrSk5XcG5FcW0xSVhGKytCQ3grRllBY2JZcTA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dUhwMjRsUXJoWDJqdVJxem9mTE90VzZBYTFhQjFiMmlqazhkd0JISUZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdOcGF2NXJJL2hyMkVEcUNVNWRZNlcySWFyUkNPY0JPR1drS2lJRWo5MWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjMHVsaGo4aVNtdlZyY1BiUEFqUUh6clV4SjV6RTFZckdYbjNtdnlIVEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxSNWN3ejlxVEpKUnlBQmxQQWNpWi95bkNLZ2l5MnhJSTROVkdwc1ZGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTdQZ3ZHUnZTV2pwTkxXWDZwQ2VPV0dHaFRxOGRqSW1VcTVZWlVvaDZXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InltWGoyK05zQy83YUZTTHRnUnB1cTRqbzk1aW5lM01NSStBUTRLMVQ4Z0lQbmFPenlYSDJYNHk4aGYwc3dET3RwUDlxK0tuS2NlYVlNNCtBbVVkYWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiWmFabkRhRDRSczNUWkVIOGdXdjNZaDAySGN6OUlqM2gxVlc0NUxITlJxOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYktGZklNckFSTXlUekhFZkt5RzEydyIsInBob25lSWQiOiJhOTQ3OTVkYy1mM2RhLTQzYzQtOGNmNC0wZjU0ZjAyZmVjZmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVtMklDa1VJdE9LTStURnlPWGNqTGlEdG1jPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLODFnMjNMdEZYTFQ5dnZvQ0VtMWl5K3gyTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHRkZEOVlGUyIsIm1lIjp7ImlkIjoiOTQ3MjY4ODQxMzQ6OTBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMjA3Mjc1ODAwODYzNTM6OTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOK0E4cHdIRUtyVHJNSUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1TldsUXJ1UWpaR3ZtR0FvUVo4aS9MR1ljOG5CWWN6ZTNlMC9hSklmRFVNPSIsImFjY291bnRTaWduYXR1cmUiOiI3VGhaVVYxVkRnUmZLVjV3bXVacXZxb3FZQkxVZ1ZqRG5YR05SakhZVWFYa1U4QU9WRnZKU1hJTVFBMGt5VUtyclFrZEJHYnFKYnlGaVl1dVZHVitDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidml0eDRIS29NaUdHSkJ2Y2dvRkYxdGlFWGlQdzhoWExKa2I1VHlRazRwaVFIeGZtWC9SSE9lT1IxajJrZVJ5Y05EY3BsY0EyQmNWelI2RUtzNHNHaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNjg4NDEzNDo5MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlVFZwVUs3a0kyUnI1aGdLRUdmSXZ5eG1IUEp3V0hNM3QzdFAyaVNIdzFEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk3NTYzNDMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIVVkifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0726884134",
  PASSWORD: 
    process.env.PASSWORD || "2367957686",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94743877156", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
