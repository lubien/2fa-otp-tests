const { TFA } = require('2fa-hotp-totp');

const key = 'IFUFAI3CLBHW4TRKFESCM33LIZUEK6JPHZJUA3TLLI3EG5RVEN5Q'
const token = process.argv[2]

console.log(new Date(Date.now()))

const generated = TFA.TOTP.generate({
    key,
    time: 30, // optional
});

const validation = TFA.TOTP.validate({
    token,
    key,
    window: 10
});

console.log({generated, token, validation})