const QueenAmdi = require('queenamdi-public');
const Amdi = QueenAmdi.events
const Build = QueenAmdi.build
const {MessageType, MessageOptions, Mimetype} = require('@blackamda/queenamdi-web-api');
const {spawnSync} = require('child_process');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
let LOL = Build.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('system_stats');

var SYSDTXT = ''
if (Build.LANG == 'SI') SYSDTXT = 'RATE US'
if (Build.LANG == 'EN') SYSDTXT = 'RATE US'

var VER = ''
if (Build.LANG == 'SI') VER = 'COMMANDS'
if (Build.LANG == 'EN') VER = 'COMMANDS'

var MSG = ''
if (Build.ALIVEMSG == 'default') MSG = '*Hi I Am Alive Now*\n\n\nDeveloper : MR.TIMA\n\n┏━━━━━━━━━━━━━━━━┃  ❖❖ RATINGS ❖❖┃\n┃  ✭✭✭✭✭ = 1314┃  ✭✭✭✭✩ = 12┃  ✭✭✭✩✩ = 8┃  ✭✭✩✩✩ = 7┃  ✭✩✩✩✩ = 3\n┃┗━━━━━━━━━━━━━━━━'
else MSG = Build.ALIVEMSG


Amdi.operate({pattern: 'alive', fromMe: LOL, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    var logo = await axios.get (Build.ALIVE_LOGO, {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Build.HANDLERS)) {
        BUTTHANDLE = Build.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }

    const buttons = [
        {buttonId: BUTTHANDLE + 'qaversion', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'qasysstats', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'ǫᴜᴇᴇɴ ᴀᴍᴅɪ © 🇵‌🇺‌🇧‌🇱‌🇮‌🇨‌ ᴇᴅɪᴛɪᴏɴ',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))

Amdi.operate({pattern: 'qasysstats', fromMe: LOL, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text, {quoted: message.data}
    );
}));

Amdi.operate({pattern: 'qaversion', fromMe: LOL, desc: Lang.BOT_V, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    await message.client.sendMessage(message.jid, 
        `*🧬 Queen Amdi Version 🧬*\n\n` + 
        '```Installed version :```\n' +
        Lang.version + 
        `\n\nCheck official website : https://amdaniwasa.com/`
   , MessageType.text, {quoted: message.data});

})); 
