/**
   * Base By Dika Ardnt.
   * Recode Manz Tzy
   * Wa Me https://wa.me/6281327496283
   * Nama session nya manztzy.json
*/

const fs = require('fs')
const chalk = require('chalk')

// Ga usah di ubah" dah free apikey
global.APIs = {
	web: 'https://revita.herokuapp.com',
	free: 'https://api-invibot.herokuapp.com',
	lol: 'https://api.lolhuman.xyz',
}

// Ga usah di ubah" dah free apikey
global.APIKeys = {
	'https://revita.herokuapp.com': 'ApiRevita',
	'https://api-invibot.herokuapp.com': 'APIKEY',
	'https://api.lolhuman.xyz': 'Atakbotz',
}

// Other
global.ownerr = ['6281327496283']
global.premium = ['6288292024190']
global.owner = ['6281327496283','6283846819169']
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.bot = '๐ด๐๐๐๐ ๐ต๐๐กโชแญช'
global.rev = 'ApiRevita'
global.lolkey = 'Atakbotz'
global.invi = 'APIKEY'
global.zen = 'BagasPrdn'
global.ownmy = '๐ด๐๐๐ ๐ป๐๐'
global.sessionName = 'manz'
global.prefa = ['','!','.','๐ฆ','๐ค','๐ฟ']
global.bisa = 'Nih Om ใ'
global.sp = 'โญ'
global.copy = '๐ด๐๐๐ ๐ป๐๐'
global.punya = 'Punya'
global.wet = '*ใ WAIT DONT SPAM ใ*'
global.man = {
kus: '*ใ FITUR KHUSUS OWNER ใ*',
dir: '*ใ HANYA BISA DI GUNAKAN DI PRIVATE CHAT ใ*',
wet: '*ใ WAIT DONT SPAM ใ*',
bomin: '*ใ BOT HARUS JADI ADMIN ใ*',
gcwa: '*ใ GROUP ONLY JOIN HERE ใ: https://chat.whatsapp.com/DSFTbb0giUsH9borzEDGEv*',
ami: '*ใ KHUSUS ADMIN GC ใ*',
}
global.mess = {
    success: 'โ Success',
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
    free: 1,
}
global.thumb = fs.readFileSync('./lib/man.jpg')
global.visoka = fs.readFileSync('./lib/manz.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

//cuma pajangan ๐ฟ
global.terr = `Ini Adalah Bot Baileys Multi Device, Dan Gua Juga Masih Pemula ๐ Jadi Wajar Kalo Tampilan Nya Jelek Dan Masih Ada Yang Eror`
global.sn = `Jangan Sange Ama Gambar Ya ๐ฟ`


//menu bot
global.menu = `apa sih`
global.ter = `generate random image`

//donasi
global.nasi = `โญโโโโ *Donasi ๐* โโโโ
โโธ *Mau Donasi Apa Liat Doang Bang ?*
โโธ Eh gua ga punya apk dana/gopay dll :v
โโธ kalo pulsa boleh lah buat beli kuota ๐ฟ
โโธ pulsa: 0895397918020
โฐโโโโ *${bot}*โโโ

โญโโโโ *Sewa Bot ๐* โโโโ
โโธ list Harga =
โโธ permanen = 7k
โโธ keuntungan: 
โโธ bot bisa di taruh di gc lu
โโธ bisa menggunakan semua fitur-fitur bot
โฐโโโโ *${bot}* โโโ`


//script

global.sc = `โญโโโโ *Script* โโโโ
โโธ *Base Ori By Dika Ardnt*
โโธ github: https://www.github.com/DikaArdnt/Hisoka-Morou
โโธ *Recode By Manz Tzy*
โโธ sc: https://www.github.com/ManzTzy1/AkariBot
โฐโโโโ *${bot}* โโโ`

global.sdkm = '```Mohon Di Patuhi Peraturan Ini Terma Kasih ๐```'