/*
	* CREATE BY TRIO SIHON LUTER
	* DATE FRIDAY, NOVEMBER 18, 2022
*/

const fs = require('fs')
const chalk = require('chalk')

//TOKO
global.tokoName = "NAMA TOKO"

//OTHER
global.owner = ['6285721840462']
global.packname = 'WhatsApp Bot'
global.author = '@triosihn'
global.botname = 'BOT NAME'
global.wm = `\n© 2022 ${tokoName} •  ${author}`
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','/']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/logo.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

