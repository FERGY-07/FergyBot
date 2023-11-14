 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName} ┃ SOPORTE*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Canal
${fgcanal}

▢ Grupo *1*
${bgp}

▢ Grupo *2*
${bgp2}

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Instagram
https://www.instagram.com/ceogeripium.dzn
`)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support'] 

export default handler
