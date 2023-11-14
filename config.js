import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51955095498', 'Richetti', true],
  ['51933348947', 'Richetti2', true],
  ['56945086055', '@ceogeripium.dzn', true],
  ['56945086055']
] //Numeros de owner 

global.mods = ['56945086055'] 
global.prems = ['56945086055', '56945086055']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'MichiBot' 
global.author = 'MichiBot' 

//--info FG
global.botName = 'MichiBot'
global.fgig = 'https://www.instagram.com/ceogeripium.dzn' 
global.fgsc = 'https://www.instagram.com/ceogeripium.dzn' 
global.fgyt = 'https://www.instagram.com/ceogeripium.dzn'
global.fgpyp = 'https://www.instagram.com/ceogeripium.dzn'
global.fglog = 'https://www.instagram.com/ceogeripium.dzn' 

//--- Grupos WA
global.fgcanal = 'https://www.instagram.com/ceogeripium.dzn'
global.bgp = 'https://www.instagram.com/ceogeripium.dzn'
global.bgp2 = 'https://www.instagram.com/ceogeripium.dzn'
global.bgp3 = 'https://www.instagram.com/ceogeripium.dzn' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '5' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
