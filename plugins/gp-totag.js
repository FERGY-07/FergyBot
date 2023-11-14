let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*👑@𝖈𝖊𝖔𝖌𝖊𝖗𝖎𝖕𝖎𝖚𝖒.𝖉𝖟𝖓* ${pesan}`
let teks = `*😸𝙈𝙞𝙘𝙝𝙞 𝙗𝙤𝙩 𝙡𝙤𝙨 𝙞𝙣𝙫𝙤𝙘𝙖 𝙥𝙪𝙩𝙭𝙨😼*\n\n${oi}\n\n*💅🏻𝙂𝙚𝙧𝙞 𝙛𝙪𝙣𝙖𝙙𝙚*\n`
for (let mem of participants) {
teks += `❄️☃️ @${mem.id.split('@')[0]}\n`}
teks += `\n✨@𝔠𝔢𝔬𝔤𝔢𝔯𝔦𝔭𝔦𝔲𝔪.𝔡𝔷𝔫✨`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|geripium)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
