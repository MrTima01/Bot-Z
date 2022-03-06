const Amazon = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const Language = require('../language');
const Lang = Language.getString('amazone');
const tk = Config.WORKTYPE == 'public' ? false : true

Amazon.addCommand({pattern: 'hidemenu', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        

 *╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*
 │
 *│ᴛʏᴘᴇ: .`+Config.PANEL_COMMAND+` get full Command list*
 ├─────────●●►
 *│🌼HEY,*  `+wish+`
 *│👤Name:* `+Config.BOT_NAME+`
 *│💎Role:* Developer
 *│Time⌚:* `+time+`
 *│📡Server:* Digital Ocean
 *│📦Frameworks:* Nodejs
 *│☬Working As*
 *│🛡️ `+Config.WORKTYPE+`*
 │ _©️ᴀᴍᴀᴢᴏɴᴇ-ᴛᴇᴇɴᴜ_
 ╰──────────●●►

 ╭──────────●●►
*│🛡️BOT COMMANDS*
 │   ───────
 │
 │► .`+Config.PANEL_COMMAND+` [All command list]
 
 ╰───────────●●►

 ────●●►

 
 ╭────────────●●►
 *│💰DOWNLOAD COMMANDS*
 │      ────────
 
 ╰────────────●●►

 ╭────────────●●►
 *│🔍SEARCH COMMANDS*
 │     ──────────
 │► .yt [ topic ]
 │► .wiki [text ]
 │► .movie [ movie name ]
 │► .github [ name ]
 │► .show [tv series ]
 │► .weather [ city ]
 │
 ╰────────────●●►

 ╭────────────●●►
 *│🛸GROUP COMMANDS*
 │  ─────────
 │► .rename [change Group name]
 │► .rules    [check rules]
 │► .info [check details]
 │► .tagadmin 
 │►.antispm
 │►.clear
 │► .report
 │► .tagall  
 │► .ban [ for owner ]
 │► .add [ for owner ]
 │► .promote [ for owner ]
 │► .demote [ for owner ]
 │► .invite [ for owner ]
 │► .leave [ for owner ]
 │►.welcome 
 │►.goodbye
 ╰───────────●●►

 ╭───────────●●►
 *│🎨MEDIA TOOLS*
 │      ───────
 │► .axmedia [25+ tools]
 │► .tblend
 │►.ocr [Read Text]
 │►.mp3 [Video To mp3]
 │► .ffmpeg [fade in:0:30 ]
 │► .removebg
 │► .spdf [convent site to pdf]
 │► .voicy
 │► .unvoice [mp3 to voice]
 ╰───────────●●►

 ╭───────────●●►
 *│⚡MORE COMMAND*
 │  ────────
 │►.scan
 │►.brdmore
 │►.rdmore
 │►.tts
 │►.gm
 │►.gn
 │►.ftext
 │► .wallpaper
 │► .anime
 │► .listanim
 │► .
 ╭───────────●●►
 *│⚙️BOT SETTINGS*
 │    ───────
 │► .pp [
 │    THANK FOR
 │     USING
 │ AMAZONE ALEXA ✉️
 ╰───────────●●►
 
`}) 

 }));
