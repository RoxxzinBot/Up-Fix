import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption .${command}`
m.reply('ᴛᴜɴɢɢᴜ sᴇᴅᴀɴɢ ᴍᴇᴍᴜᴀᴛ')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api-fgmods.ddns.net/api/trigger?url=${url}&apikey=6sotNhAL`)).buffer()
await conn.sendButton(m.chat, `Done`, wm3, hasil, [['Menu', '.menu']], m)
}
handler.help = ['trigger']
handler.tags = ['internet']
handler.command = /^(trigger)$/i
handler.limit = 1

export default handler

