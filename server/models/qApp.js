//import enigma from 'enigma.js';


//const qixSchema = require('./node_modules/enigma.js/schemas/qix/3.1/schema.json');
//const qixSchema = require('./node_modules/enigma.js/schemas/qix/3.1/schema.json');

const config = {
  schema: qixSchema,
  session: {
    host: 'localhost',
    prefix: '',
    port: 4848,
    unsecure: true
  }
};

export default enigma.getService('qix', config).then((qix) => {
  return qix.global.openApp('Helpdesk Management.qvf').then((app) => {
    return app;
  });
});