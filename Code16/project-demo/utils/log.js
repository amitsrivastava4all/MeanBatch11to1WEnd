const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: '/Users/amit/Documents/mylogs/cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'debug' } }
  });

  const logger = log4js.getLogger('cheese');
  module.exports = logger; 