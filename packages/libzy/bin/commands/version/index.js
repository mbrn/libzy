function version() {
  const pck = require('../../../package.json');
  console.log(pck.version);
}

exports.default = version;