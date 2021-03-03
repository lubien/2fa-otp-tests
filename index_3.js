const totp = require('totp-generator');

const key = 'IFUFAI3CLBHW4TRKFESCM33LIZUEK6JPHZJUA3TLLI3EG5RVEN5Q'
const token = process.argv[2]

console.log(new Date(Date.now()))

const generated = totp(key);

const validation = generated === token

console.log({generated, token, validation})