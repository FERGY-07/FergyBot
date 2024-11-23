import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51924335279', 'paolo', true],
  ['51929457802', 'paolo', true],
  ['51924335279', '@ceo.dzn', true],
  ['51932073137']
] //Numeros de owner 

global.mods = ['51932073137'] 
global.prems = ['51932073137', '51932073137']
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
global.packname = 'FergyBot' 
global.author = 'FergyBot' 

//--info FG
global.botName = 'FergyBot'
global.fgig = 'https://www.instagram.com/paolo.ff_07' 
global.fgsc = 'https://www.instagram.com/paolo.ff_07' 
global.fgyt = 'https://www.instagram.com/paolo.ff_07'
global.fgpyp = 'https://www.instagram.com/paolo.ff_07'
global.fglog = 'https://www.instagram.com/paolo.ff_07' 

//--- Grupos WA
global.fgcanal = 'https://www.instagram.com/paolo.ff_07'
global.bgp = 'https://www.instagram.com/paolo.ff_07'
global.bgp2 = 'https://www.instagram.com/paolo.ff_07'
global.bgp3 = 'https://www.instagram.com/paolo.ff_07' //--GP NSFW

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
