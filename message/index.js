/*
	* CREATE BY TRIO SIHON LUTER
	* DATE FRIDAY, NOVEMBER 18, 2022
*/

require('../library/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, MessageType} = require('@adiwajshing/baileys')

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('../library/myfunc')
const { formatRupiah } = require('../library/formatRupiah')

//Tgl, waktu, ucapan
var datw = new Date();
var tahun = datw.getFullYear();
var bulan = datw.getMonth();
var taanggal = datw.getDate();
var hari = datw.getDay();
var jams = datw.getHours();
var jam = datw.getHours();
var menit = datw.getMinutes();
var detik = datw.getSeconds();
switch(hari) {
	case 0:
		hari = "Minggu";
		break;
	case 1:
		hari = "Senin";
		break;
	case 2:
		hari = "Selasa";
		break;
	case 3:
		hari = "Rabu";
		break;
	case 4:
		hari = "Kamis";
		break;
	case 5:
		hari = "Jum'at";
		break;
	case 6:
		hari = "Sabtu";
		break;
}
switch(bulan) {
	case 0:
		bulan = "Januari";
		break;
	case 1:
		bulan = "Februari";
		break;
	case 2:
		bulan = "Maret";
		break;
	case 3:
		bulan = "April";
		break;
	case 4:
		bulan = "Mei";
		break;
	case 5:
		bulan = "Juni";
		break;
	case 6:
		bulan = "Juli";
		break;
	case 7:
		bulan = "Agustus";
		break;
	case 8:
		bulan = "September";
		break;
	case 9:
		bulan = "Oktober";
		break;
	case 10:
		bulan = "November";
		break;
	case 11:
		bulan = "Desember";
		break;
}
switch(jams) {
	case 0:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴅɪɴɪ ʜᴀʀɪ';
		break;
	case 1:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴅɪɴɪ ʜᴀʀɪ';
		break;
	case 2:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴅɪɴɪ ʜᴀʀɪ';
		break;
	case 3:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴍᴇɴᴊᴇʟᴀɴɢ sᴜʙᴜʜ';
		break;
	case 4:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴍᴇɴᴊᴇʟᴀɴɢ sᴜʙᴜʜ';
		break;
	case 5:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴍᴇɴᴊᴇʟᴀɴɢ sᴜʙᴜʜ';
		break;
	case 6:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ';
		break;
	case 7:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ';
		break;
	case 8:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ';
		break;
	case 9:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ';
		break;
	case 10:
		jams = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ';
		break;
	case 11:
		jams = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ';
		break;
	case 12:
		jams = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ';
		break;
	case 13:
		jams = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ';
		break;
	case 14:
		jams = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ';
		break;
	case 15:
		jams = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ';
		break;
	case 16:
		jams = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ';
		break;
	case 17:
		jams = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ';
		break;
	case 18:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴍᴇɴᴊᴇʟᴀɴɢ ᴘᴇᴛᴀɴɢ';
		break;
	case 19:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴍᴇɴᴊᴇʟᴀɴɢ ᴘᴇᴛᴀɴɢ';
		break;
	case 20:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ';
		break;
	case 21:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ';
		break;
	case 22:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ';
		break;
	case 23:
		jams = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ';
		break;
}
var tampilUcapan = "" + jams;
var tampilTanggal = hari + ", " + taanggal + " " + bulan + " " + tahun;
var tampilWaktu =  jam + ":" + menit + ":" + detik;
var tampilHari = hari;

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
		const from = mek.key.remoteJid
		const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
		
		//ReadMore
		const more = String.fromCharCode(8206)
		const readmore = more.repeat(4001)

        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
		
		//Reply fake 
		const reply = (teks) => {
        	hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply":{"title": `${tampilTanggal} ${pushname}`,"body": owner,"previewType": "PHOTO","thumbnail": thumb, "sourceUrl": 'https://wa.me/6285721840462'}}}, {quoted: m})
        }
        
        
		
		//Fakes
		const fkontak = {
        key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
                remoteJid: `6283136505591-1614953337@g.us`
            }: {})
        },
        message: {
            'contactMessage': {
                'displayName': `${pushname}`,
                'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                'jpegThumbnail': thumb,
                thumbnail: thumb,
                sendEphemeral: true
            }}}
            
            const fstatus = {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `ᎻᎪᏢᏢᎽ ՏᎻϴᏢᏢᏆΝᏀ\n${tokoName} siap melayani Anda kapan pun dan dimana pun.`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": thumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            
            


	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
		
		
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!isCreator) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            //hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./metadata/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)
        
        
       
	
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        	
	    
        switch(command) {
        	case 'hallo':{
        		if(args[0] === 'bot'){
        			teks = `Selamat datang di *${tokoName}*, silakan dipilih menu dibawah ini :`
        			let listProduk = [{title : `▓▓▓▓▓▓ Silakan Dipilih ▓▓▓▓▓▓`, rows : [
						{ title : '1. Convert Pulsa', description : 'Ubah pulsa Anda menjadi uang hanya di sini.', rowId : 'cp'},
						{ title : '2. Beli Pulsa', description : 'Beli pulsa murah hanya disini, harga murah plus diskon', rowId : 'pulsa'}
					]}, 
					{ title : `Fitur Bot Lainnya`, rows : [
						{ title : '1. Bikin Stiker', description : 'Ayo bikin stiker pakai foto temen mu di sini, di jamin sekali kedip jadi stiker', rowId : 'stiker' },
						{ title : '2. Unduh video tiktok', description : 'Ingin bikin story WhatsApp dari video Tiktok ?, Download Video nya disini!!', rowId : 'tiktok' }
						]}
					]
					footer = wm
					button = '~ Pilihan Anda ~'
					titles = `Hallo kak *@${pushname}*\n\n`
					hisoka.sendListMes(m.chat, teks, footer, titles, button, listProduk, m)
        		}
        	} break
        	case 'request':{
				if(!text) throw `Mau request apa kak ?\n*Example :* ${prefix+command} Hack Facebook`
				len = text.length
				teks = `*REQUEST FITUR BOT*\n\nDari *@${m.sender.split`@`[0]}*\n\nPesan : ${text}`
				if(len > 5 ){
					hisoka.sendMessage(`${owner[0]}@s.whatsapp.net`, {text : teks, contextInfo: {mentionedJid: [m.sender]}}, { quoted :fstatus})
					await sleep(3000)
					reply(`Permintaan sudah di terima oleh owner Bot ${botname}`)
				}
			}break
        	
			case 'stiker' : case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            //m.reply(mess.wait)
                    if (/image/.test(mime)) {
                    	reply(mess.wait)
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            	reply(mess.wait)
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
