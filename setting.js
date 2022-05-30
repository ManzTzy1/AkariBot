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
global.bot = '𝐴𝑘𝑎𝑟𝑖 𝐵𝑜𝑡⃪᭪'
global.rev = 'ApiRevita'
global.lolkey = 'Atakbotz'
global.invi = 'APIKEY'
global.zen = 'BagasPrdn'
global.ownmy = '𝑴𝒂𝒏𝒛 𝑻𝒛𝒚'
global.sessionName = 'manz'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.bisa = 'Nih Om 々'
global.sp = '⭔'
global.copy = '𝑴𝒂𝒏𝒛 𝑻𝒛𝒚'
global.punya = 'Punya'
global.wet = '*「 WAIT DONT SPAM 」*'
global.man = {
kus: '*「 FITUR KHUSUS OWNER 」*',
dir: '*「 HANYA BISA DI GUNAKAN DI PRIVATE CHAT 」*',
wet: '*「 WAIT DONT SPAM 」*',
bomin: '*「 BOT HARUS JADI ADMIN 」*',
gcwa: '*「 GROUP ONLY JOIN HERE 」: https://chat.whatsapp.com/DSFTbb0giUsH9borzEDGEv*',
ami: '*「 KHUSUS ADMIN GC 」*',
}
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

//cuma pajangan 🗿
global.terr = `Ini Adalah Bot Baileys Multi Device, Dan Gua Juga Masih Pemula 😅 Jadi Wajar Kalo Tampilan Nya Jelek Dan Masih Ada Yang Eror`
global.sn = `Jangan Sange Ama Gambar Ya 🗿`


//menu bot
global.menu = `apa sih`
global.ter = `generate random image`

//donasi
global.nasi = `╭───⌜ *Donasi 💌* ⌟──❑
│▸ *Mau Donasi Apa Liat Doang Bang ?*
│▸ Eh gua ga punya apk dana/gopay dll :v
│▸ kalo pulsa boleh lah buat beli kuota 🗿
│▸ pulsa: 0895397918020
╰───⌜ *${bot}*⌟─❑

╭───⌜ *Sewa Bot 💌* ⌟──❑
│▸ list Harga =
│▸ permanen = 7k
│▸ keuntungan: 
│▸ bot bisa di taruh di gc lu
│▸ bisa menggunakan semua fitur-fitur bot
╰───⌜ *${bot}* ⌟─❑`


//script

global.sc = `╭───⌜ *Script* ⌟──❑
│▸ *Base Ori By Dika Ardnt*
│▸ github: https://www.github.com/DikaArdnt/Hisoka-Morou
│▸ *Recode By Manz Tzy*
│▸ sc: https://www.github.com/ManzTzy1/AkariBot
╰───⌜ *${bot}* ⌟─❑`

global.sdkm = '```Mohon Di Patuhi Peraturan Ini Terma Kasih 🙏```'