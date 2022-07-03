// CREATED BY LEXXY
const fs = require('fs')
const chalk = require('chalk')

// OTHERS
global.owner = ['6283834558105', '6285789004732']
global.premium = ['6283834558105', '6285789004732']
global.number = '6282129808476'
global.ownername = 'XxyNeo'
global.botname = 'Neo Botz'
global.packname = 'Neo'
global.author = 'By Lexxy'
global.lolkey = 'Atakbotz'
global.email = 'andra0628@gmail.com'
global.youtubeowner = 'https://youtube.com/channel/UCGDk88W54RJOgk6b1p42NVg'
global.websiteowner = 'https://github.com/Lexxy24'
global.githubname = 'Lexxy24'
global.region = 'Indonesia'
global.sessionName = "session"
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.simbol = "➭"
global.rkyt = []

// BIARIN:v
global.creator = '© Created By Lexxy Official'

// LIMIT
global.limitawal = {
premium: "infinity",
free: 20
}

global.mess = {
error: 'Error',
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
noRegis: 'Kamu Belum Terdaftar Di Database Bot Silahkan Ketik\nExample:\n#daftar nama|umur\nContoh:\n#daftar Lexxy|17',
}

// RANDOM
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//BATAS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
