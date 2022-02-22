require("toml-require").install();

const config = require(`${process.env.PWD}/netlify.toml`);

module.exports = JSON.stringify(
  config.redirects.reduce((o, { from, to }) => ({ ...o, [from]: to }), {})
);
