const { authenticator } = require('otplib');

// const secret = 'IFUFAI3CLBHW4TRKFESCM33LIZUEK6JPHZJUA3TLLI3EG5RVEN5Q';
const secret = 'abcdefghijklmnopq';
// Alternative:
// const secret = authenticator.generateSecret();
// Note: .generateSecret() is only available for authenticator and not totp/hotp

const generated = authenticator.generate(secret);

const token = process.argv[2]

const validation = authenticator.verify({ token, secret });

console.log({generated, token, validation})