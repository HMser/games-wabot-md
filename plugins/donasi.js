let handler =  m => m.reply(`
╭─「 Donate To developer 」
│ • https://www.buymeacoffee.com/hmser
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
