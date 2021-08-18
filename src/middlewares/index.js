const fs = require('fs');
const path = require('path');
const format = require('date-fns/format');


const logs = fs.createWriteStream(
    path.join(__dirname, '../logs', `express-${format(new Date(), 'dd-MM-yyyy')}.log`), { flags: 'a' }
)

module.exports = logs;
