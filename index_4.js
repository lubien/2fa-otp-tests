const speakeasy = require('speakeasy');

// console.log(speakeasy.generateSecret())

const key = 'IFUFAI3CLBHW4TRKFESCM33LIZUEK6JPHZJUA3TLLI3EG5RVEN5Q'
const token = process.argv[2]

console.log(new Date(Date.now()))

const generated = speakeasy.totp({ secret: key, encoding: 'base32', });

const validation = speakeasy.totp.verify({
    secret: key,
    encoding: 'base32',
    token
})

console.log({generated, token, validation})